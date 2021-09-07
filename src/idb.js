let objectType = {
    autoIncrement: true,
    keyPath: "id",
};

async function connectToShip(dbName) {
    if (!dbName) return null;
    let request = await openRequest(dbName);
    return new Promise((resolve, reject) => {
        request.onsuccess = async () => {
            resolve(request.result)
        };
        request.onerror = (e) => {
            reject("Some Error in request" + e);
        };
    });

}


async function deliveryGuy(dbName, objectStore) {
    let db = await connectToShip(dbName);
    let tx = db.transaction(objectStore, "readwrite");
    tx.onerror = console.error;
    tx.oncomplete = (res) => {
        res.target.db.close();
    };
    return tx.objectStore(objectStore);
}

// get items and split it to make an array
async function getListContent(dbName, listName) {
    let objStore = await deliveryGuy(dbName, listName);
    let request = objStore.getAll();
    return new Promise((resolve, reject) => {
        request.onerror = (e) => reject(e.target.error);
        request.onsuccess = () => {
            resolve(request.result);
        };
    });
}

// // function to save todos
async function appendtoList(dbName, listName, listContent) {
    let objStore = await deliveryGuy(dbName, listName);
    let req = objStore.add(listContent);
    req.onerror = console.warn;
}

// for deleting todos ->  remove element from html and local storage
async function deleteFromList(dbName, listName, key) {
    let objStore = await deliveryGuy(dbName, listName);
    let request = objStore.delete(parseInt(key));
    request.onerror = console.warn;
}

// for marking done -> add line-through and update in DB
async function updateList(dbName, listName, key) {
    let objStore = await deliveryGuy(dbName, listName);
    let request = objStore.get(parseInt(key));
    request.onsuccess = (e) => {
        let value = e.target.result;
        value.completed = !value.completed;
        objStore.put(value);
    };
    request.onerror = console.warn;
}

function getCurrentDBversion(dbName) {
    return new Promise((resolve, reject) => {
        let req = indexedDB.open(dbName);
        req.onsuccess = () => {
            resolve(req.result.version);
            req.result.close();
        };
        req.onerror = () => reject(req.error);
    });
}

async function openRequest(dbName, objectStoreName) {
    let request;
    if (objectStoreName !== "" && typeof objectStoreName !== "undefined") {
        let currVersion = await getCurrentDBversion(dbName);
        let nextVersion = ++currVersion;
        request = indexedDB.open(dbName, nextVersion);
    } else {
        request = indexedDB.open(dbName);
    }
    return request;
}

// create an indexDB with the given name
async function createShip(dbName) {
    if (!dbName) return null;
    let request = await openRequest(dbName);
    return new Promise((resolve, reject) => {
        request.onsuccess = async () => {
            resolve(request.result)
            request.result.close();
        };
        request.onerror = (e) => {
            reject("Some Error in request" + e);
        };
    });

}

async function addShipContainers(dbName, objectStoreName) {
    let request = await openRequest(dbName, objectStoreName);
    request.onupgradeneeded = async (e) => {
        let db = await e.target.result;
        //if other objectStoreNames are provided create an objectStore
        if (objectStoreName !== "" && typeof objectStoreName !== "undefined") {
            if (!db.objectStoreNames.contains(objectStoreName)) {
                db.createObjectStore(objectStoreName, objectType).add({
                    text: `this is an example of ${objectStoreName}`,
                });
            }
        }
    };
    return new Promise((resolve, reject) => {
        request.onsuccess = () => {
            resolve(request.result);
            request.result.close();
        };
        request.onerror = (err) => {
            reject(`Some Error in request : \n ${err.target.error}`);
        };
    });
}

async function deleteShipContainers(dbName, objectStoreName) {
    let request = await openRequest(dbName, objectStoreName);
    return new Promise((resolve, reject) => {
        request.onupgradeneeded = async (e) => {
            let db = await e.target.result;
            db.deleteObjectStore(objectStoreName);
        };
        request.onsuccess = () => {
            resolve(request.result);
            request.result.close();

        };
        request.onblocked = request.onerror = () => reject(request);
    });
}

async function getContainerNames(dbName) {
    let db = await connectToShip(dbName)
    let containerName = [];
    for (const names of db.objectStoreNames) {
        containerName.push(names)
    }
    db.close();
    return containerName;
}

function deleteShip(dbName) {
    indexedDB.deleteDatabase(dbName);
}

export {
    createShip,
    deleteShip,
    addShipContainers,
    deleteShipContainers,
    appendtoList,
    deleteFromList,
    updateList,
    getListContent,
    getContainerNames,
};
