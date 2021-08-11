import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import {PropTypes} from "prop-types";

function TextSection({heading, children, color,align="left", pos="start"}) {
    return (
        <Box
            width={{sm: "100%", md: "100%", lg: "100%"}}
            height={{sm: "50%", md: "50%", lg: "100%"}}
            p='10'
            m={4}
            bgColor={color}
            placeSelf={pos}
            alignItems='center'
            flexDirection='column'>
            <Heading
                textAlign={align}
                width='100%'
                borderBottom='1px solid'
                mb={3}>
                {heading}
            </Heading>
            <Text align={align}>{children}</Text>
        </Box>
    );
}
TextSection.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    align: PropTypes.string,
    pos: PropTypes.string,
};
export default TextSection;
