import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CyberButton } from "../components/CyberButton";
import { RiContactsBook2Fill, RiHome4Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
interface Props {}

const BottomNavItem = styled(IconButton)`
  display: "block";
  border-radius: 50%;
  background: #222222;
  box-shadow: 5px 5px 10px #1d1d1d, -5px -5px 10px #272727;
  &:hover {
    color: lightgrey;
    cursor: pointer;
  }
`;
const BottomNav: React.FunctionComponent = (props) => {
  return (
    <Flex
      // padding="1rem"
      align="center"
      justify="space-evenly"
      basis="100%"
      p="0.5rem 1rem"
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      boxShadow="inner"
      backgroundColor="#222222"
      display={{ base: "flex", md: "none" }}
    >
      <Link href="/">
        <BottomNavItem size="lg" colorScheme="black" icon={<RiHome4Fill />}>
          Home
        </BottomNavItem>
      </Link>
      <Link href="portfolio">
        <BottomNavItem size="lg" icon={<FaBookOpen />} colorScheme="black">
          Portfolio
        </BottomNavItem>
      </Link>
      <Link href="/contact">
        <BottomNavItem
          size="lg"
          icon={<RiContactsBook2Fill />}
          colorScheme="black"
        >
          Contact
        </BottomNavItem>
      </Link>

      {/* <Link href="/">
          <BottomNavItem>Home</BottomNavItem>
        </Link> */}
    </Flex>
  );
};

export default BottomNav;
