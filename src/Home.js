import React from "react";
import { Flex } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import TextSection from "./TextSection";
import Section from "./Section";
export default function Home() {
  return (
    <Flex flexDirection='column' p={0} m={0} width='100vw'>
      <Section>
        <TextSection heading='konichiwa'>
          Hello this is supposed to be a long string lets see how it is
          handled.Does it wraps around if it gets long enough or will it stay
          the same
        </TextSection>
        <Flex flexGrow='2' flexShrink='0'>
          this is something secomdary lets see where it gets rendered
        </Flex>
      </Section>
      <NavBar />
      <Section>
        <Flex flexGrow='2' flexShrink='0'>
          this is something secomdary lets see where it gets rendered
        </Flex>{" "}
        <TextSection heading='konichiwa'>
          Hello this is supposed to be a long string lets see how it is
          handled.Does it wraps around if it gets long enough or will it stay
          the same
        </TextSection>
      </Section>
      <Section>
        <TextSection heading='konichiwa'>
          Hello this is supposed to be a long string lets see how it is
          handled.Does it wraps around if it gets long enough or will it stay
          the same
        </TextSection>
        <Flex flexGrow={2}>
          this is something secomdary lets see where it gets rendered
        </Flex>{" "}
      </Section>
    </Flex>
  );
}
