import {Button, Flex, Input} from "@chakra-ui/react"

export default function ModifyDB() {
    return <Flex m={13} p={13} flexDirection="column" justifyContent="center" borderRight="2px solid black">
        <h2 align="center">Modify DBs</h2>
        <Input placeholder="DB name" variant="outline" mb={5}/>
        <Button colorScheme="green" variant="solid" mb={5}>Open DB</Button>
        <Button colorScheme="red" variant="solid" mb={5}>Delete DB</Button>
        <Input placeholder="Object Store Name" variant="flushed" mb={5}/>
        <Button colorScheme="green" variant="solid" mb={5}>Add ObjectStore</Button>
        <Button colorScheme="red" variant="solid" mb={5}>Delete ObjectStore</Button>

    </Flex>
}