import { Flex, Box, HStack } from "@chakra-ui/layout";
import { Image, Container, Heading, Text, Button } from "@chakra-ui/react";
import Typewriter from "typewriter-effect/dist/core";
import React, { useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "framer-motion";
import Link from "next/link";
import { DownloadIcon, ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";

interface Props {}

const Intro: React.FunctionComponent<Props> = (props) => {
  const typeTextRef = useRef();

  useEffect(() => {
    const stringSplitter = (string) => {
      const splitter = new GraphemeSplitter();
      return splitter.splitGraphemes(string);
    };
    const typewriter = new Typewriter(typeTextRef.current, {
      loop: true,
      delay: 75,
      deleteSpeed: "natural",
      stringSplitter,
    });

    typewriter
      .pauseFor(800)
      .typeString("Web Apps")
      .pauseFor(800)
      .deleteChars(4)
      .typeString("APIs")
      .pauseFor(800)
      .deleteChars(10)
      .typeString("Games")
      .pauseFor(800)
      .deleteChars(10)
      .start();
  }, []);

  return (
    <Container
      display={{ base: "block", lg: "flex" }}
      p={{ base: "1rem", md: "2.5rem 4rem" }}
      overflow={{ base: "auto", lg: "hidden" }}
      maxW="container.lg"
      maxH="80vh"
      height={{ lg: "calc(80vh - 200px)" }}
    >
      <Flex
        justify="center"
        align="center"
        flexBasis="50%"
        minW={{ md: "20rem" }}
      >
        <motion.div
          initial={{ x: 80 }}
          animate={{
            x: 0,
            transition: {
              delay: 0.3,
            },
          }}
        >
          <Flex justify="center" align="center">
            <Image
              boxSize={{ base: "15rem", md: "15rem", lg: "20rem" }}
              boxShadow=" 0 0 25px 0 rgb(0 0 0 / 80%);"
              p="1rem"
              bgColor="#444"
              objectPosition="top"
              objectFit="cover"
              src="https://ik.imagekit.io/symetryn/rojan_JPZgRA8_E.jpg?tr=w-320"
              alt="rojan image"
              borderRadius="50%"
            />
          </Flex>
        </motion.div>
      </Flex>

      <Flex
        justify="center"
        direction="column"
        flexBasis="50%"
        pt={{ base: "1rem", md: "0" }}
      >
        <motion.div
          initial={{ x: 80 }}
          animate={{
            x: 0,
            transition: {
              delay: 0.4,
            },
          }}
        >
          <Heading as="h4" size="lg" color="lightgrey">
            I make <span ref={typeTextRef}></span>
          </Heading>
          <Heading as="h1" size="2xl">
            Rojan Maharjan
          </Heading>
          <Text pt="0.5rem">
            I am a Full Stack JavaScript developer with 4 years of experience
            creating real-world web applications.
          </Text>
          <HStack pt="1rem" spacing="1rem">
            <Link href="portfolio">
              <Button
                colorScheme="black"
                variant="outline"
                _hover={{ bg: "#fff", color: "#000" }}
              >
                Portfolio <ExternalLinkIcon ml="0.3rem" />
              </Button>
            </Link>
            <Button
              as="a"
              href="/resume.pdf"
              download
              pl="1rem"
              colorScheme="black"
              variant="outline"
              _hover={{ bg: "#fff", color: "#000" }}
            >
              <DownloadIcon mr="0.3rem" /> Resume
            </Button>
          </HStack>
        </motion.div>
      </Flex>
    </Container>
  );
};

export default Intro;
