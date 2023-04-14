import { Flex, Spacer, Box, Link, IconButton,Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import ModeToggler from "../../components/modeToggler";


const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          size="lg"
          icon={<HamburgerIcon />}
          backgroundColor="transparent"
          _hover={{ backgroundColor: "transparent" }}
        />
      </Box>
      <Box>
        <Link href="/" fontSize="2xl" fontWeight="bold" color="white">
          My App
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <Link href="/" mr={6}>
          Home
        </Link>
        <Link href="/about" mr={6}>
          About
        </Link>
        <Link href="/contact" mr={6}>
          Contact
        </Link>
      </Box>

      <Box pos={"fixed"} top="0" right="0" p={4}>
        <ModeToggler />
      </Box>
      <Box display={{
        base: "none",
        md: "block"
      }}>
        <Button
          size="lg"
          icon={<HamburgerIcon />}
          backgroundColor="transparent"
          _hover={{ backgroundColor: "transparent" }}
          href="/dashboard"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;