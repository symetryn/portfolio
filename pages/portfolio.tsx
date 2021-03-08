import { Box, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../widgets/Nav";
import Intro from "../widgets/Intro";
import ParticleContainer from "../widgets/ParticleContainer";
import BaseLayout from "../widgets/BaseLayout";
import PortfolioCard from "../widgets/PortfolioCard";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { work } from "../constants/work";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Portfolio() {
  const router = useRouter();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <BaseLayout>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        as={motion.ol}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {work.map((item, index) => {
          return (
            <PortfolioCard
              key={item.name}
              data={item}
              index={index}
            ></PortfolioCard>
          );
        })}
        {/* <motion.li variants={item} />
        <motion.li variants={item} /> */}
      </Grid>
    </BaseLayout>
  );
  // return (
  //   <BaseLayout>
  //     <Heading as="h1" size="2xl">
  //       My Work
  //     </Heading>

  //     {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}>
  //       {work.map((item, index) => {
  //         return <PortfolioCard index={index}></PortfolioCard>;
  //       })}
  //     </Grid> */}

  //   </BaseLayout>
  // );
}
