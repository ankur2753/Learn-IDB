import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/layout";
const Section = ({ children }) => {
  return (
    <Flex
      height='90vh'
      width='100vw'
      direction={{ sm: "column", md: "column-reverse", lg: "row" }}
      m={0}
      p={0}
      justifyContent='normal'
      gridAutoFlow={{ sm: "row", md: "row", lg: "column" }}>
      {children}
    </Flex>
  );
};
Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
