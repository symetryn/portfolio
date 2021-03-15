import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../widgets/Nav";
import Intro from "../widgets/Intro";
import ParticleContainer from "../widgets/ParticleContainer";
import BaseLayout from "../widgets/BaseLayout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, errors, register, formState, reset } = useForm();

  function onSubmit(values) {
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_UID
      )
      .then(
        (response) => {
          setIsLoading(false);
          reset();
        },
        function (err) {
          console.log("FAILED...", err);
          setIsLoading(false);
        }
      );
  }
  return (
    <BaseLayout>
      <Flex justify="center" direction="column" align="center">
        <Heading as="h1" size="lg" textAlign="center">
          Contact Me
        </Heading>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text align="center">
            Email: <a href="mailto: roseonmhr@gmail.com">roseonmhr@gmail.com</a>
          </Text>
          <VStack
            spacing="4"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            alignItems="flex-end"
          >
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Full Name" ref={register} name="name" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                ref={register}
                placeholder="Enter your message"
                name="message"
                rows={5}
              />
            </FormControl>
            <Button
              isLoading={isLoading}
              loadingText="Submitting"
              type="submit"
              ml="auto"
              colorScheme="black"
              variant="outline"
              _hover={{ bg: "#fff", color: "#000" }}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </BaseLayout>
  );
}
