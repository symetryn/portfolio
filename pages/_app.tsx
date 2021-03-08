import "../styles/globals.css";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import ParticleContainer from "../widgets/ParticleContainer";
import PreviewContext from "../contexts/PreviewContext";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    let routeChangeStart = () => console.log(NProgress.start());
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);
  return (
    <PreviewContext.Provider value="mini">
      <ChakraProvider theme={theme}>
        <Box zIndex="1">
          <ParticleContainer />
        </Box>
        <Box overflow="hidden" backgroundColor="#222">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Box>
      </ChakraProvider>
    </PreviewContext.Provider>
  );
}

export default MyApp;
