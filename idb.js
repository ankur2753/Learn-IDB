function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        request.onsuccess(() => {
            resolve(request.result);
        })
        request.onerror = e => reject("error in request :", e)
    })
}

/*@params dbName: a string to open the db with
* Creates a connection to the database and returns the db
*  also closing it when the next fun is called
* */
function* genrateConnectionToDB(dbName) {
    if (!dbName) throw new Error("Database Name Provided")
    let request = indexedDB.open(dbName);
    while (true) {
        //a generator function have yield instead of return so it only runs till the yield at one call.
        yield promisifyRequest(request)
        //being a yield means this section will run when the next()  is called.
        request.result.close();
        //hence closing previous connection with the database.
        //and opening a new request henceForth
        request = indexedDB.open(dbName);
    }
}

function makeChangesToDB(dbName, version, upgradeFunction) {
    if (!version || isNaN(version))
        throw  new Error("Version(an integer) not provided");
    if (!upgradeFunction instanceof Function)
        throw new Error("upgradeFunction must be a function");
    let request = indexedDB.open(dbName, version);
    request.onupgradeneeded = upgradeFunction;
    request.onsuccess = () => {
        request.result.close();
    }
    request.onerror = console.error;
}

//===================================================================================================//
//----ALL The functions created from  now on depends on the db returned in genrateConnectionToDB----//
//===================================================================================================//

function openTransaction({db, objectStore, index, type = "readwrite"}) {
    let tx = db.transaction(objectStore, type)
    if (index) return tx.index(index);
    return tx.objectStore(objectStore);
}

function appendTo(transaction, objectToAdd) {
    let request = transaction.add(objectToAdd);
    request.onerror = console.error;
}

function deleteFrom(transaction, objectKey) {
    let request = transaction.delete(objectKey);
    request.onerror = console.error;
}

function getOneFrom(transaction, objectKey) {
    let request = transaction.get(objectKey);
    return promisifyRequest(request);
}

function getAllFrom(transaction) {
    let request = transaction.getAll();
    return promisifyRequest(request);
}

function IteratorOn(transaction) {
    let request = transaction.openCursor();
    return promisifyRequest(request);
}
