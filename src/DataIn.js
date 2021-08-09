import {Flex, Select} from "@chakra-ui/react";

export default function DataIn() {
    return <Flex justifyContent="center" alignItems="center">
        <Select>
            <option>Object Store Name</option>
            <option>Todos</option>
            <option>Lists</option>
        </Select>
    </Flex>
}