import { Box, Button, Heading, IconButton, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "@chakra-ui/icons";
import { PortfolioData } from "../constants/portfolioData";
import { PortfolioCardExpand } from "./PortfolioCardExpand";

const item: Variants = {
  hidden: { opacity: 0, x: 400 },
  show: { opacity: 1, x: 0, width: "100%", position: "relative", scale: 1 },
  active: {
    opacity: 1,
    x: 0,
    scale: [3, 1],
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: ["30%", "100%"],
    width: ["30%", "100%"],
    zIndex: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Card = styled(Box)`
  background-color: "#333";
  border-radius: 1rem;

  width: 100%;
  padding: 1rem;

  transition: background 0.1s linear;

  ${({ $active }) =>
    $active &&
    `
    position : absolute ;
  
    height: 100%;
    width: 100%;
 
  
  `};
  &:hover {
    background: #222222;

    box-shadow: 13px 13px 26px #0e0e0e, -13px -13px 26px #363636;
    /* box-shadow: 20px 20px 60px #0e0e0e, -20px -20px 60px #363636; */
    /* box-shadow: 32px 32px 64px #0e0e0e, -32px -32px 64px #363636; */
  }
`;
const Preview = styled.div`
  height: 100%;
  width: 100%;
`;
const CloseButton = styled(IconButton)`
  z-index: 100;
  position: fixed;

  background-color: black;
`;

interface Props {
  index: number;
  data: PortfolioData;
}

const PortfolioCard = ({ data }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      variants={item}
      animate={active ? "active" : "show"}
      onEnded={(e) => {
        console.log(e);
      }}
    >
      <Card
        $active={active}
        backgroundColor="#333"
        borderRadius="1rem"
        backgroundPosition="center top"
        backgroundSize="100% auto"
        height={{ base: "18rem", md: "20rem" }}
        width="100%"
        cursor="pointer"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? (
          <>
            <CloseButton
              aria-label="Close button"
              size="sm"
              icon={<CloseIcon />}
              top={{ base: 0, md: "-1rem" }}
              right={{ base: 0, md: "-1rem" }}
              onClick={() => {
                setActive(false);
              }}
            />
            <PortfolioCardExpand data={data} />
          </>
        ) : (
          <>
            <Heading as="h2" size="md">
              {data.name}
            </Heading>
            <Image
              pt="0.5rem"
              height="92%"
              width="100%"
              fit="cover"
              objectPosition="top center"
              src={`${data.image.base}?tr=w-700`}
            />
          </>
        )}
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;
