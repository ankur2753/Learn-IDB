import {
    Box,
    Button,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom"

export var NavBar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    let bg = useColorModeValue("linear(to top, #00c6ff, #0072ff)", "linear(to right, #0f0c29, #302b63, #24243e)");
    return (
        <Flex
            position='sticky'
            minW={"100vh"}
            zIndex={10}
            bgGradient={bg}
            p={6}
            m={0}
            height={{md: "28"}}
            top={0}
            justifyContent='space-between'
            direction={{md: "row-reverse", lg: "row"}}
            as='nav'>
            <Box className='logo' m={5}>
                Learn indexDB
            </Box>
            <Box m={5} sx={{"@media screen and (max-width:600px)": {display: "none"}}}
                 display={{md: "none", lg: "block"}}>
                <Link to="/learn-idb">
                    <Button variant='outline' mr={3}>
                        Home
                    </Button>
                </Link>
                <Link to="/learn-idb/try">
                    <Button variant='outline' mr={3}>
                        Try-it
                    </Button>
                </Link>
                <Button variant='outline' mr={3} onClick={toggleColorMode}>
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                </Button>
            </Box>
            <Box m={5}
                 display={{sm: "block", md: "block", lg: "none"}}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon/>}
                        variant="solid"
                    />
                    <MenuList fontSize={"1.2rem"} sx={{"@media screen and (max-width:600px)": {width: "90vh"}}}
                              w="50vw">
                        <Link to="/learn-idb">
                            <MenuItem alignItems={"right"} p={5}>
                                Home
                            </MenuItem>
                        </Link>
                        <Link to="/learn-idb/try">
                            <MenuItem p={5}>
                                Try-it
                            </MenuItem>
                        </Link>
                        <MenuItem p={5} onClick={toggleColorMode}>
                            {colorMode === "light" ? "Dark" : "Light"} Mode
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
};
