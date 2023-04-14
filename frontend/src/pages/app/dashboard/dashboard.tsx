import {
  Text,
  Flex,
  Heading,
  Button,
  useColorModeValue,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import UserHelped from "@/components/Graph/userHelped";
import BalanceChart from "@/components/Graph/balance";

import { useState } from "react";

export default function Dashboard() {
  return (
    <Box
      height="100%"
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        position="relative"
        width={"80%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="10"
        borderRadius={"2xl"}
        bg={useColorModeValue("white", "blackAlpha.600")}
        boxShadow="lg"
        margin={10}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
          textAlign="center"
          mb="10"
        >
          Dashboard
        </Heading>

        <SimpleGrid columns={2} spacing={8}>
            <UserHelped />
            <BalanceChart />

        </SimpleGrid>
      </Box>
    </Box>
  )
}
