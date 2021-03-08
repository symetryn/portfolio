import { Box } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../widgets/Nav";
import Intro from "../widgets/Intro";
import ParticleContainer from "../widgets/ParticleContainer";
import BaseLayout from "../widgets/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Intro />
    </BaseLayout>
  );
}
