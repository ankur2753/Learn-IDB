import {DarkMode, Flex, Input, Select} from "@chakra-ui/react";

export default function DataIn() {
    return <Flex justifyContent="center" alignItems="center" flexDirection="column" m={10} borderRadius={15} p={6}>
        <h2 align="center">ADD/Delete Data</h2>
        <DarkMode>
            <Select color="white" variant="filled" id="selectObjectStores" m={5}>
                <option>Object Store Name</option>
                <option>Todos</option>
                <option>Lists</option>
            </Select>
        </DarkMode>
        <Input placeholder="Name" type="text" variant="flushed" mb={3}/>
        <Input placeholder="Phone No" type="text" variant="flushed" mb={3}/>
        <Input placeholder="Address" type="text" variant="flushed" mb={3}/>
    </Flex>
}