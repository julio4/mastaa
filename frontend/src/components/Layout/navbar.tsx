import {
  Flex,
  Spacer,
  Box,
  Link,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import ModeToggler from "./modeToggler";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bgGradient={useColorModeValue(
        "linear(to-r, orange.100, whiteAlpha.200)",
        "linear(to-r, orange.800, whiteAlpha.400)"
      )}
      color={useColorModeValue("gray.700", "gray.200")}
    >
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
        <Link href="/" fontSize="2xl" fontWeight="bold">
          Mastaa
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
        <ModeToggler />
      </Box>

      {/* <Box display={{
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
      </Box> */}
    </Flex>
  );
};

export default Navbar;
