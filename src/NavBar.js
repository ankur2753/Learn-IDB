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
            width='100%'
            bgGradient={bg}
            p={6}
            m={0}
            height={{sm: "s", md: "28"}}
            top={0}
            justifyContent='space-between'
            direction={{sm: "row-reverse", md: "row-reverse", lg: "row"}}
            as='nav'>
            <Box className='logo' m={5}>
                Learn indexDB
            </Box>
            <Box m={5} sx={{"@media screen and (max-width:600px)": {display: "none"}}}
                 display={{sm: "none", md: "none", lg: "block"}}>
                <Button variant='outline' mr={3}>
                    <Link to="/">Home</Link>
                </Button>
                <Button variant='outline' mr={3}>
                    <Link to="/try">
                        Try-it
                    </Link>
                </Button>
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
                        variant='outline'
                    />
                    <MenuList sx={{"@media screen and (max-width:600px)": {width: "100vh"}}} w="50vw">
                        <MenuItem><Link to="/">Home</Link></MenuItem>
                        <MenuItem> <Link to="/try">
                            Try-it
                        </Link></MenuItem>
                        <MenuItem onClick={toggleColorMode}>
                            {colorMode === "light" ? "Dark" : "Light"} Mode
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
};
