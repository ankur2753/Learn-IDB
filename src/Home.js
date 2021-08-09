import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import {NavBar} from "./NavBar";
import TextSection from "./TextSection";
import Section from "./Section";
import ContainerShip from "./ContainerShip";
import LightBulb from "./LightBulb";
import Versions from "./Versions";
import DeliveryGal from "./DeliveryGal";

export default function Home() {
    return (
        <Box display="grid" gridRowGap="5%" justifyContent="space-between" p={0} m={0} width='100vw'>
            <Section>
                <TextSection heading='Hello'>
                    This is a Guide to use IndexDB, A database built into your browser it self.<br/>
                    You Read it correct, a database right into the browser itself you don't need to reach a server to
                    store data or rely on the localStorage and other solutions.
                    <br/>
                    Not to mention Local Storage and Cookies have their own limitations.When it comes to IDB there are
                    very few limitations, you can store a relatively large amount of data.<br/>
                    If you want to try something out yourself an implementation of IDB has been Set up, Go to the Try-it
                    Section from the nav bar<br/>
                    <br/>Without further adieu let's dive into basics of IndexDB.<br/>
                    Also You might want to click on the bulb next to the man, or the sun next to the boat.
                </TextSection>
                <Flex flexGrow='2' flexShrink='0' justifyContent="center" alignItems="center">
                    <LightBulb/>
                </Flex>
            </Section>
            <NavBar/>
            <Section>
                <Flex flexGrow='2' flexShrink='0' justifyContent="center" alignItems="center">
                    <ContainerShip/>
                </Flex>
                <TextSection heading='Object Stores' align="right" pos="end">
                    I personally believe that giving simple analogy for complex things make it easier to
                    understand.Let's think of out database as a cargo
                    ship.It can have many containers on it. And inside those containers there can be many Boxes.
                    <br/>According to this analogy the Containers on the ship can be considered as Object Stores.
                    As a ship can have one or many containers, so can database have one or more Object Stores.
                    <br/>Now it's upto you if you want to keep things organized and clean you can further have small
                    boxes inside of the container, or maybe not.These little boxes can be considered as indexes in
                    database.But as keeping things organized makes searching faster in real world , similarly indexes
                    makes searching in database faster.<br/>

                </TextSection>
            </Section>
            <Section>
                <TextSection heading='Version Changes'>
                    In indexDB you cannot create /delete/ modify something in object stores unless there is a version
                    change.<br/>Coming back to our cargo ship analogy we cannot load/ unload containers on the ship
                    unless it's onshore.So think of version change as the ship coming on shore.<br/>
                    In indexDB a version cannot go back it always increases.You cannot have structural changes in
                    database. Any changes must be done when an upgradeneeded event is fired.<br/>
                    An Operation on indexDB can take any one of 3 paths.<br/>
                    <li>Success -
                        <br/> You did some operation on the database and it went as planned.
                    </li>
                    <li> Error -
                        <br/> You did some operation on the database but it didn't go as planed and some error
                        occurred.
                    </li>
                    <li> Upgradeneeded -
                        <br/> Need to do some structural changes to the DB, be it add/removing Object Stores or
                        indexes.Time to upgrade. it can result in either success or an error. ie finally you get a
                        success or an error never a upgradeneeded , it's just a phase in between
                    </li>

                </TextSection>
                <Flex flexGrow={2} justifyContent="center" alignItems="center">
                    <Versions/>
                </Flex>
            </Section>
            <Section>
                <Flex flexGrow={2} justifyContent="center" alignItems="center">
                    <DeliveryGal/>
                </Flex>
                <TextSection heading='Web Workers' align="right" pos="end">
                    As mozilla doc says -<br/>
                    <q> Everything you do in IndexedDB always happens in the context of a
                        transaction, representing
                        interactions with data in the database. All objects in IndexedDB — including object stores,
                        indexes,
                        and cursors — are tied to a particular transaction. Thus, you cannot execute commands, access
                        data,
                        or open anything outside of a transaction .
                    </q><br/>
                    Coming back to our ship, think of transaction as a delivery guy/gal that does all the interaction
                    between the warehouse and the ship, be it reading data or adding data. Depending on the situation It
                    can result in a success or an error.Similarly a transaction ends up in a Success or an error. And
                    the delivery guy is web worker here in the case of indexDB. Web Workers create a separate thread and
                    carry out the operations inside the transaction in the Background.<br/>Also this delivery boy
                    doesn't require the boat to come ashore. Maybe he owns a smaller boat , lol.<br/>
                    So you can read / write data inside the existing Object Stores, without a upgradeneeded event.<br/>
                    <br/>You don't need to worry about Web Workers and stuff unless you are having many instances open
                    at the same time, in which case it might start taking longer and longer per request as the Web
                    Worker will be busy with the previous threads.If that's the case you might want to close the
                    previous requests/ transactions/connections open on db first.
                </TextSection>
            </Section>
        </Box>
    );
}
