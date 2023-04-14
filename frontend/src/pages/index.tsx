import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Text,
  Flex,
  Heading,
  Button,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import ModeToggler from "../components/modeToggler";


// importing landing page image from public folder
import landingPageImage from "../../public/landing_page.png";
import landingPageImageDark from "../../public/landing_page_dark.png";

export default function LandingPage() {
  const router = useRouter();
  const [imgLand, setImgLand] = useState(landingPageImage);


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
        <Image src={useColorModeValue(landingPageImage, landingPageImageDark)} alt="landing page image" />
        <Flex justifyContent="center" alignItems="center">
          <Flex
            direction="column"
            p={12}
            rounded={6}
            alignItems="center"
            padding={6}
          >
            <Heading
              as="h1"
              size="4xl"
              mb={4}
              color={useColorModeValue("gray.700", "gray.100")}
            >
              Syfu
            </Heading>
            <Heading
              as="h2"
              textAlign="center"
              maxW="75%"
              size="md"
              mb={6}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              The smart wallet that adapts to your needs. Customize your
              experience with our easy-to-use plugins.
            </Heading>
            <Button
              size="lg"
              onClick={() => router.push("/app/start")}
              transition="all 0.3s"
              bgGradient={useColorModeValue(
                "linear(to-r, yellow.200, orange.300)",
                "linear(to-r, yellow.600, orange.700)"
              )}
              _hover={{
                bgGradient: useColorModeValue(
                  "linear(to-r, yellow.200, orange.300)",
                  "linear(to-r, yellow.500, orange.600)"
                ),
                boxShadow: "xl",
                transform: "scale(1.05)",
              }}
            >
              Enter app
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box pos={"fixed"} top="0" right="0" p={4}>
        <ModeToggler />
      </Box>
    </Box>
  );
}
