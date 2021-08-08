import { React } from "react";
import {
  Flex,
  Box,
  Button,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
export var NavBar = () => {
  return (
    <Flex
      position='sticky'
      width='100vw'
      background='blue.500'
      p={6}
      m={0}
      height={{ sm: "s", md: "28" }}
      top={0}
      justifyContent='space-between'
      direction={{ sm: "row-reverse", md: "row-reverse", lg: "row" }}
      as='nav'>
      <Box className='logo' m={5}>
        Learn indexDB
      </Box>
      <Box m={5} display={{ sm: "none", md: "none", lg: "block" }}>
        <Button variant='outline' mr={3}>
          Home
        </Button>
        <Button variant='outline' mr={3}>
          Try-it
        </Button>
        <Button variant='outline' mr={3}>
          About Me
        </Button>
      </Box>
      <Box m={5} display={{ sm: "block", md: "block", lg: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList w={{ sm: "100vw", md: "50vw", lg: "30vw" }}>
            <MenuItem>Home</MenuItem>
            <MenuItem> Try-it</MenuItem>
            <MenuItem>About Me</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
