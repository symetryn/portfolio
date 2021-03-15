import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { PortfolioData } from "../constants/portfolioData";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

interface Props {
  data: PortfolioData;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 0.4,
    },
  },
};
export const PortfolioCardExpand = ({ data }: Props) => {
  return (
    <Box
      as={motion.div}
      p={{ base: "0", md: "1.5rem" }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="2" mb={{ base: "1rem", md: 0 }}>
          {/* <Heading as="h3" size="lg" pb="0.5rem">
            Preview
          </Heading> */}
          <Box
            overflow="auto"
            height={{ base: "40vh", md: "calc(80vh - 5rem)" }}
            css={{
              "&::-webkit-scrollbar": {
                width: "0.2rem",
                marginRight: "1rem",
              },

              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },

              "&::-webkit-scrollbar-thumb": {
                background: "#444",
                borderRadius: "4rem",
              },
            }}
          >
            <Image fit="contain" width="100%" src={data.image.thumbnail} />
          </Box>
        </Box>
        <Box
          flex="3"
          pl="1rem"
          overflow="auto"
          maxH={{ base: "45vh", md: "calc(80vh - 5rem)" }}
        >
          <Heading as="h2" size="lg">
            {data.name}
          </Heading>
          <Text>{data.description}</Text>
          <Heading as="h3" size="md" pt="1rem" pb="0.5rem">
            Key Features
          </Heading>
          <UnorderedList>
            {data?.features?.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </UnorderedList>
          <Heading as="h3" size="md" pt="1rem" pb="0.5rem">
            Technology Used
          </Heading>
          <Wrap spacing={2} boxSizing="border-box" overflow="hidden">
            {data?.tech?.map((item) => (
              <WrapItem key={item.name}>
                <Tag size="md" variant="outline" colorScheme="whiteAlpha">
                  <TagLabel>{item.name}</TagLabel>
                  {/* <TagRightIcon as={MdSettings} /> */}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Flex>
    </Box>
  );
};
