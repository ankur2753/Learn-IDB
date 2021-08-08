import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};
MenuToggle.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default MenuToggle;
