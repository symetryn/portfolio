import { Box, Button, IconButton } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "@chakra-ui/icons";
import { PortfolioData } from "../constants/portfolioData";

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
  height: 20rem;
  width: 100%;

  ${({ $active }) =>
    $active &&
    `
    position : absolute ;
  
    height: 100%;
    width: 100%;
 
  
  `};
`;
const Preview = styled.div`
  height: 100%;
  width: 100%;
`;
const CloseButton = styled(IconButton)`
  z-index: 100;
  position: fixed;
  top: -1rem;
  right: -1rem;
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
        height="20rem"
        width="100%"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? (
          <>
            <CloseButton
              aria-label="Call Segun"
              size="sm"
              icon={<CloseIcon />}
              onClick={() => {
                setActive(false);
              }}
            />
            <Preview>hello</Preview>
          </>
        ) : (
          data.name
        )}
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;
