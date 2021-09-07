import {Button, Flex, Input} from "@chakra-ui/react"
import {addShipContainers, createShip, deleteShip, deleteShipContainers} from "./idb"

export default function ModifyDB({dbState}) {
    return <Flex m={13} p={13} flexDirection="column" justifyContent="center" borderRight="2px solid black">
        <h2 align="center">Modify DBs</h2>
        <Input placeholder="DB name" variant="outline" onChange={e => {
            dbState[1](e.target.value);
        }} mb={5}/>
        <Button colorScheme="green"
                onClick={() => {
                    createShip(dbState[0]);
                }}
                variant="solid"
                mb={5}>
            Open DB</Button>
        <Button colorScheme="red" onClick={() => {
            deleteShip(dbState[0]);
        }} variant="solid" mb={5}>Delete DB</Button>
        <Input placeholder="Object Store Name" id="OSname" variant="flushed" mb={5}/>
        <Button colorScheme="green" onClick={() => {
            let objStoreName = document.getElementById("OSname").value;
            console.log(dbState[0], objStoreName)
            if (objStoreName)
                addShipContainers(dbState[0], objStoreName);
        }} variant="solid" mb={5}>Add ObjectStore</Button>
        <Button colorScheme="red" onClick={() => {
            let objSname = document.getElementById("Osname").value;
            if (objSname)
                deleteShipContainers(dbState[0], objSname);
        }} variant="solid" mb={5}>Delete ObjectStore</Button>

    </Flex>
}
