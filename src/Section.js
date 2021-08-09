import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/layout";
const Section = ({ children }) => {
  return (
    <Box
      width='100%'
      display="grid"
      m={0}
      gridGap="20px"
      p={0}
      justifyContent='space-between'
      gridAutoFlow={{ sm: "row", md: "row", lg: "column" }}>
      {children}
    </Box>
  );
};
Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
