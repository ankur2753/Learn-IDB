import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
const TextSection = ({ heading, children }) => {
  return (
    <Flex
      width={{ sm: "100%", md: "100%", lg: "70%" }}
      height={{ sm: "50%", md: "50%", lg: "100%" }}
      p='10'
      bgColor='rebeccapurple'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'>
      <Heading
        textAlign='left'
        width='100%'
        borderBottom='1px solid black'
        mb={3}>
        {heading}
      </Heading>
      <Text>{children}</Text>
    </Flex>
  );
};
TextSection.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.string,
};
export default TextSection;
