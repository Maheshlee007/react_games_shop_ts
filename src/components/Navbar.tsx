import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/Layer_1-2.png";

const Navbar = () => {
  return (
    <nav>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Navbar</Text>
      </HStack>
    </nav>
  );
};

export default Navbar;
