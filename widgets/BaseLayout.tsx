import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement, useEffect } from "react";
import Nav from "./Nav";
import ParticleContainer from "./ParticleContainer";
import { PageTransition } from "next-page-transitions";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import BottomNav from "./BottomNav";

interface Props {}

const BaseLayout: React.FunctionComponent = (props): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    console.log("Hey there :)");
  }, []);
  return (
    <>
      <Head>
        <title>Rojan Maharjan</title>
        <meta name="title" content="Rojan Maharjan" />
        <meta
          name="description"
          content="I am a Full Stack JavaScript developer with 2 years of experience creating real-world Web Applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rojanmaharjan.com.np" />
        <meta property="og:title" content="Rojan Maharjan" />
        <meta
          property="og:description"
          content="I am a Full Stack JavaScript developer with 3 years of experience creating real-world web Applications."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/symetryn/rojan_JPZgRA8_E.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rojanmaharjan.com.np" />
        <meta property="twitter:title" content="Rojan Maharjan" />
        <meta
          property="twitter:description"
          content="I am a Full Stack JavaScript developer with 3 years of experience creating real-world web Applications."
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/symetryn/rojan_JPZgRA8_E.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Box
        width={{ base: "100%", md: "80%" }}
        margin={{ base: "none", md: "10vh auto" }}
      >
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              x: "100%",
              transition: {
                duration: 0.5,
              },
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.5,
              },
            },
            pageExit: {
              // opacity: 0,
              x: "-100%",
              transition: {
                duration: 0.3,
              },
            },
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
          }}
        >
          <Box
            height={{ base: "100vh", md: "80vh" }}
            backgroundColor="#222"
            zIndex="2"
            position="relative"
            fontSize="1rem"
            padding={{ base: "1rem", md: "2rem 4rem" }}
            borderRadius={{ base: "none", md: "1rem" }}
            color="white"
            overflow="hidden"
            pb={{ base: "5rem", md: "2rem" }}
          >
            <Nav />

            {props.children}
          </Box>
        </motion.div>
        <BottomNav />
      </Box>
    </>
  );
};

export default BaseLayout;
