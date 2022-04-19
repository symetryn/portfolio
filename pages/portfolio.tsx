import { Box, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../widgets/Nav";
import Intro from "../widgets/Intro";
import ParticleContainer from "../widgets/ParticleContainer";
import BaseLayout from "../widgets/BaseLayout";
import PortfolioCard from "../components/PortfolioCard";
import React, { useCallback } from "react";
import {
  AnimationControls,
  AnimationProps,
  motion,
  TargetAndTransition,
} from "framer-motion";
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
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const generateDelay = (index): TargetAndTransition => {
  return {
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
    },
  };
};

export default function Portfolio() {
  const router = useRouter();

  return (
    <BaseLayout>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        height={{ base: "78vh", md: "61vh" }}
        p={{ base: " 1rem", md: "1.8rem" }}
        overflow="auto"
      >
        {work.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={generateDelay(index)}
              key={item.name}
            >
              <PortfolioCard data={item} index={index}></PortfolioCard>
            </motion.div>
          );
        })}
      </Grid>
    </BaseLayout>
  );
}
