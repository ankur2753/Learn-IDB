import React from "react";
import DataIn from "./DataIn";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import Section from "./Section";
import TextSection from "./TextSection";

import {NavBar} from "./NavBar";
import ModifyDB from "./ModifyDB";

export default function TryIt() {
    let form_bg = useColorModeValue("purple.500", "gray.700")
    return <Box display="grid" gridAutoFlow="row" width="100vw">
        <NavBar/>
        <Section>
            <TextSection align="left" heading="Creating a DataBase">
                Let's try making a database for our packages in the cargo ship.
                <br/> As a Person can have multiple cargo ships, An origin(in a layman's term a website) can have
                multiple database. Similar to the ship each DataBase needs a name . Let's Start out by creating one<br/>
                Fill in Whatever name you like in the next form. And then we'll have a look at how to create it in code.<br/>
            </TextSection>
        </Section>
        <Section>
            <code>Gist Here</code>
            <Flex justifyContent="center" alignItems="center" bg={form_bg} m={20} borderRadius={15}>
                <ModifyDB/>
                <DataIn/>
            </Flex>

        </Section>
    </Box>
}