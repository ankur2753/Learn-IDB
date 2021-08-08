import React from "react";
import { Flex, Select } from "@chakra-ui/react";
const InputForm = () => {
  return (
    <Flex width='100%'>
      <Flex>
        <Select placeholder='Select Object Store'>
          <option value='Container1'>Container1</option>
          <option value='Container2'>Container2</option>
          <option value='Container3'>Container3</option>
          <option value='Container4'>Container4</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default InputForm;
