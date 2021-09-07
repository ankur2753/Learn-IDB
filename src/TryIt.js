import React from "react";
import {Box} from "@chakra-ui/react";
import Section from "./Section";
import TextSection from "./TextSection";
import {NavBar} from "./NavBar";
import InpForm from "./InpForm";

export default function TryIt() {
    return <Box display="grid" gridAutoFlow="row" width="100vw">
        <NavBar/>
        <Section>
            <Box m={10} p={10}>Gist Here</Box>
            <TextSection align="left" heading="Creating a DataBase">
                Let's try making a database for our packages in the cargo ship.
                <br/> As a Person can have multiple cargo ships, An origin(in a layman's term a website) can have
                multiple database. Similar to the ship each DataBase needs a name . Let's Start out by creating one<br/>
                Fill in Whatever name you like in the next form. And then we'll have a look at how to create it in code.<br/>
            </TextSection>
        </Section>
        <Section>
            <InpForm/>
            <div id="Status">

            </div>

        </Section>
    </Box>
}