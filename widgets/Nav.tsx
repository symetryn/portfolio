import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CyberButton } from "../components/CyberButton";

interface Props {}

const NavItem = styled.a`
  display: "block";
  margin-left: 1rem;
  &:hover {
    color: lightgrey;
    cursor: pointer;
  }
`;
const Nav: React.FunctionComponent = (props) => {
  return (
    <Flex
      // padding="1rem"
      as="nav"
      align="center"
      justify="space-between"
      basis="100%"
      pb="2rem"
    >
      <Flex
        basis="20%"
        align="center"
        fontSize="1.8rem"
        fontFamily="cyberpunk"
        height="2.5rem"
      >
        {/* <Box
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="red"
          height="2rem"
          width="2rem"
          borderRadius="50%"
          mr="0.2rem"
        > */}
        {/* R</Box>
        ojan */}
        <CyberButton>Rojan</CyberButton>
      </Flex>
      <Flex basis="40%" justify="flex-end">
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="portfolio">
          <NavItem>Portfolio</NavItem>
        </Link>
        <Link href="/contact">
          <NavItem>Contact</NavItem>
        </Link>

        {/* <Link href="/">
          <NavItem>Home</NavItem>
        </Link> */}
      </Flex>
    </Flex>
  );
};

export default Nav;
