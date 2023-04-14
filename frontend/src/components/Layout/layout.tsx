import { useState, useEffect } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import { ReactNode } from "react";

import { Flex, useColorModeValue, Box } from "@chakra-ui/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      height={"100vh"}
      bgGradient={useColorModeValue(
        "radial(orange.200 5%, whiteAlpha.200 95%)",
        "radial(orange.800 5%, whiteAlpha.200 95%)"
      )}
    >
      <Flex
        flexDir="column"
        h="100vh"
        bg={useColorModeValue("blackAlpha.200", "blackAlpha.600")}
      >
        <Navbar />
        <Flex grow={1}>{children}</Flex>
        <Footer />
      </Flex>
    </Box>
  );
}
