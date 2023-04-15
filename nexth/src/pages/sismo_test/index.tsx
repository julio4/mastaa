// // // testing sismo connection
// // // sismo group ID: 0x8a3fd9670f4e1b1f7750bc274f1d262c
// App ID: 0x1cb5b80d67547767ef3e3fa0b1d28c67

const APP_ID = "0x1cb5b80d67547767ef3e3fa0b1d28c67";
const GROUP_ID = "0x8a3fd9670f4e1b1f7750bc274f1d262c";

import {
  Text,
  Flex,
  Heading,
  Button,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import {
  SismoConnectButton,
  AuthType,
  SismoConnectClientConfig,
  SismoConnectResponse,
  useSismoConnect,
} from "@sismo-core/sismo-connect-react";
import { useState } from "react";
import { ethers } from "ethers";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x1cb5b80d67547767ef3e3fa0b1d28c67",
  // vaultAppBaseUrl: "http://localhost:3000/test/",
};

export default function OnChainSimpleClaim() {
  const { response, responseBytes } = useSismoConnect({
    config: sismoConnectConfig,
  });
  return (
    <Box
      height={"100vh"}
      bgGradient={useColorModeValue(
        "radial(orange.100 5%, whiteAlpha.200 95%)",
        "radial(orange.800 5%, whiteAlpha.200 95%)"
      )}
    >
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <SismoConnectButton
          //You will need to register an appId in the Factory
          appId={"0x1cb5b80d67547767ef3e3fa0b1d28c67"}
          //Request proofs from your users for a groupId
          claim={{
            groupId: "0x8a3fd9670f4e1b1f7750bc274f1d262c",
          }}
          callbackPath="/sismo_test"
          //OR
          // claims={[
          //   {
          //     groupId: "0x8a3fd9670f4e1b1f7750bc274f1d262c",
          //   },
          // ]}
          auth={{
            authType: AuthType.VAULT,
          }}
          //OR
          // auths={[
          //   {
          //     authType: AuthType.VAULT,
          //   },
          // ]}
          onResponseBytes={async (bytes: string) => {
            //Send the response to your contract to verify it
            //thanks to the @sismo-core/sismo-connect-solidity package
          }}
        />
      </Box>
      <Button
        onClick={() => {
          console.log("response = ", response); 
        }}
      >REVEAL RESPONSE</Button>
    </Box>
  );
}
