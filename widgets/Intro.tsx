import { Flex, Box } from "@chakra-ui/layout";
import { Image, Container, Heading, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect/dist/core";
import React, { useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "framer-motion";

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
      .typeString("Apis")
      .pauseFor(800)
      .deleteChars(10)
      .typeString("Games")
      .pauseFor(800)
      .deleteChars(10)
      .start();
  }, []);

  return (
    <Container
      display={{ base: "block", md: "flex" }}
      py="5rem"
      maxW="container.lg"
    >
      <Box flexBasis="50%" minW="20rem">
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
              src="me.jpg"
              alt="rojan image"
              borderRadius="50%"
            />
          </Flex>
        </motion.div>
      </Box>

      <Flex justify="center" direction="column" flexBasis="50%">
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
            I am a Full Stack JavaScript developer with 2 years of experience
            creating real world Web applications.
          </Text>
        </motion.div>
      </Flex>
    </Container>
  );
};

export default Intro;
