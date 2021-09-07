import {
    Button,
    DarkMode,
    Flex,
    Heading,
    IconButton,
    Input,
    Select,
    useColorModeValue
} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons"
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {addShipContainers, appendtoList, createShip, deleteShip, deleteShipContainers, getContainerNames} from "./idb";

const MotionFLex = motion(Flex);

async function handleOptions(currDB, setContainerNames) {
    const options = await getContainerNames(currDB);
    setContainerNames(options);
}

function DataIn({currDB}) {
    let [ContainerNames, setContainerNames] = useState([]);
    let selectedOption;
    useEffect(() => {
            handleOptions(currDB, setContainerNames);
        },
        [currDB]);
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}}
                       justifyContent="center" alignItems="center" flexDirection="column"
                       m={10} borderRadius={15}
                       p={6}>
        <h2 align="center">ADD Data</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            let submitObj = {
                name: e.target.Name.value,
                phone: e.target.Phone.value,
                address: e.target.Address.value,
            }
            console.dir(submitObj)
            appendtoList(currDB, selectedOption, submitObj);
            e.target.Name.value = "";
            e.target.Phone.value = "";
            e.target.Address.value = "";
        }}>
            <DarkMode>
                <Select isRequired placeholder="select Container" color="white"
                        onChange={(e) => {
                            selectedOption = e.target.value;
                            console.log(selectedOption)
                        }} variant="filled" id="selectObjectStores"
                        m={5}>
                    {ContainerNames.map(names => (<option>{names}</option>))}
                </Select>
            </DarkMode>
            <Input placeholder="Name" isRequired name="Name" type="text" variant="flushed" mb={3}/>
            <Input placeholder="Phone No" name="Phone" type="text" variant="flushed" mb={3}/>
            <Input placeholder="Address" name="Address" type="text" variant="flushed" mb={3}/>
            <Button type="submit" disabled={typeof selectedOption !== "undefined"}>Submit</Button>
        </form>
    </MotionFLex>
}

function ModifyObjectStores({currDB}) {
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}} m={13}
                       p={13} flexDirection="column" justifyContent="center">
        <Heading as='h2' fontSize="xl" mb={5} align="center">Modify Containers on the Ship</Heading>
        <Input placeholder="ContainerName" id="ObjStoreName" variant="outline" mb={5}/>
        <Flex>

            <Button colorScheme="green" onClick={() => {
                addShipContainers(currDB, document.getElementById("ObjStoreName").value)
            }} variant="solid" mr={5}>Create Container</Button>
            <Button colorScheme="red" onClick={() => {
                deleteShipContainers(currDB, document.getElementById("ObjStoreName").value)
            }} variant="solid" mr={5}>Delete Container</Button>
        </Flex>
    </MotionFLex>
}

function ModifyDB({setCurrDB}) {
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}} m={13}
                       p={13}
                       flexDirection="column"
                       justifyContent="center">
        <Heading as='h2' fontSize="xl" mb={5} align="center">Modify Ship</Heading>
        <form onSubmit={e => {
            setCurrDB(e.target.dbName.value)
            e.preventDefault();
        }} name="ModifyForm">

            <Input onChange={e => setCurrDB(e.target.value)} placeholder="DB name" name="dbName" variant="outline"
                   mb={5}/>
            <Flex>
                <Button type="submit"
                        onClick={() => createShip(document.ModifyForm.querySelector("input", "[name=dbName]").value)}
                        colorScheme="green"
                        variant="solid" mr={5}>Create Ship</Button>
                <Button onClick={() => deleteShip(document.ModifyForm.querySelector("input", "[name=dbName]").value)}
                        type="submit" colorScheme="red" variant="solid" mr={5}>Delete Ship</Button>
            </Flex>
        </form>
    </MotionFLex>
}

function HandleInputSections({radioButtonValue, currDB, setCurrDB}) {
    switch (radioButtonValue) {
        case"modify":
            return <ModifyDB setCurrDB={setCurrDB} key="modify"/>;
        case"create":
            return <ModifyObjectStores currDB={currDB} key='create'/>
        case"update":
            return <DataIn currDB={currDB} key='update'/>
        default :
            return <ModifyDB currDB={currDB} key="update"/>
    }
}

export default function InpForm() {
    let [currDB, setCurrDB] = useState("");
    let sections = ["modify", "create", "update"];
    let form_bg = useColorModeValue("linear(to-t, #373A34,#4286f4)", "linear(to-t, #41295a,#20002c)")
    let [optionValue, setOptionValue] = useState(0)
    return <Flex justifyContent="center" alignItems="center" bgGradient={form_bg} m={20} flexDirection="column"
                 borderRadius={15}>
        <AnimatePresence exitBeforeEnter>
            <HandleInputSections key={optionValue} currDB={currDB} setCurrDB={setCurrDB}
                                 radioButtonValue={sections[optionValue]}/>
        </AnimatePresence>
        <Flex mt={3}>
            <IconButton aria-label="next" disabled={optionValue <= 0} colorScheme="green" onClick={() => {
                if (optionValue - 1 >= 0) {
                    setOptionValue(--optionValue)
                }
            }} icon={<ChevronLeftIcon/>} m={2}/>
            <IconButton aria-label="next" onClick={() => {
                if (optionValue + 1 < sections.length) {
                    setOptionValue(++optionValue)
                }
            }} disabled={currDB === "" || optionValue >= sections.length - 1}
                        colorScheme="green" icon={<ChevronRightIcon/>}
                        m={2}/>
        </Flex>
    </Flex>
}