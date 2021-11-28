import {
    Button,
    DarkMode,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import React from "react";

const MotionFLex = motion(Flex);

function DataIn({onSubmitFunction}) {
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}}
                       justifyContent="center" alignItems="center" flexDirection="column"
                       m={10} borderRadius={15}
                       p={6}>
        <h2 align="center">Data</h2>
        <FormControl as="form" onSubmit={(e) => {
            e.preventDefault()
            let submitObj = {
                name: e.target.Name.value,
                phone: e.target.Phone.value,
                address: e.target.Address.value,
            }
            onSubmitFunction(submitObj);
            e.target.Name.value = "";
            e.target.Phone.value = "";
            e.target.Address.value = "";
            e.target.help = "Submition successful"

        }}>
            <FormHelperText name="help" color={"black"}>Add data to your containers</FormHelperText>
            <Input placeholder="Name" isRequired name="Name" type="text" variant="flushed" mb={3}/>
            <Input placeholder="Phone No" name="Phone" isRequired type="number" variant="flushed" mb={3}/>
            <Input placeholder="Address" variant="flushed" name="Address" type="text" mb={3}/>
            <Button type="submit">Submit</Button>
        </FormControl>
    </MotionFLex>
}

function SelectFromOptions({listOfOptions = [], onSubmitFunction, next, what, openPopUP}) {
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}}
                       m={13}
                       p={13}
                       flexDirection="column"
                       justifyContent="center">
        <Heading as='h2' fontSize="xl" mb={5} align="center">{what}</Heading>
        <FormControl as="form" onSubmit={e => {
            e.preventDefault();
            onSubmitFunction(e.target.selectedOption.value);
            next(true);
        }}>
            <DarkMode>
                <FormLabel>Please Select a {what} From the list</FormLabel>
                <Select name="selectedOption" isRequired placeholder={"Select " + what}
                        color="white">
                    {listOfOptions.map((name) => <option value={name}
                                                         key={name}>{name} </option>)}
                </Select>
            </DarkMode>
            <br/>
            <Button variant="ghost" onClick={() => openPopUP(true)} mr={8}>Create New</Button>
            <Button variant="ghost" type="submit">Submit</Button>
        </FormControl>


    </MotionFLex>
}

function CreateNewSection({next, list_of_DataBase, createDB, createObjectStore}) {
    const [value, setValue] = React.useState("1")
    return <MotionFLex initial={{x: -100, opacity: 0}} exit={{opacity: 0, x: 100}} animate={{x: 0, opacity: 1}}
                       justifyContent="center" alignItems="center" flexDirection="column"
                       m={10} borderRadius={15}
                       p={6}>
        <Heading as='h2' fontSize={"xl"} mb={5}
                 align="center">Create New</Heading>
        <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
                <Radio value="1" colorScheme={"orange"}>DataBase / Ship</Radio>
                <Radio value="2" colorScheme={"blackAlpha"}>ObjectStore / Containers</Radio>
            </Stack>
        </RadioGroup>
        <Stack direction={"column"} m={3} p={3}>
            <FormControl isDisabled={value === "2"} as="form" onSubmit={(e) => {
                e.preventDefault();
                createDB(e.target.shipName.value);
                e.target.shipName.value = '';
                next(true);
            }}>
                <Heading as='h2' fontSize={value === "1" ? "lg" : "sm"} mb={5} fontWeight={500}
                         align="center">DataBase</Heading>

                <Input isRequired name={"shipName"} placeholder={"Enter the name of new Ship"}/>
                <Button isDisabled={value === "2"} variant={"outline"} mt={3} type={"submit"}>Create</Button>
            </FormControl>

            <FormControl as="form" isDisabled={value === "1"} onSubmit={(e) => {
                e.preventDefault();
                createObjectStore(e.target.dbName.value, e.target.osName.value);
                e.target.dbName.value = '';
                e.target.osName.value = '';
                next(true)
            }}>
                <Heading as='h2' fontWeight={500} fontSize={value === "2" ? "lg" : "sm"} mb={5} align="center">Object
                    Store</Heading>
                <Select name={"dbName"} isRequired placeholder={"Select Ship"}>
                    {list_of_DataBase.map((name) => <option value={name}
                                                            key={name}>{name} </option>)}
                </Select>
                <Input name={"osName"} mt={2} isRequired placeholder={"Enter name of DB"}/>
                <Button isDisabled={value === "1"} variant={"outline"} mt={3} type={"submit"}>Create</Button>

            </FormControl>
        </Stack>
    </MotionFLex>
}

export {
    DataIn,
    SelectFromOptions,
    CreateNewSection
}