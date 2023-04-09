import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import HeroContentComponent from "./hero-content";

function HeroComponent() {
  const heroHeightUnder375 = useMediaQuery("(min-height:300px)");

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: heroHeightUnder375
          ? "calc(100vh - 56px)"
          : "calc(100vh + 56px)",
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "inherit",
          height: "100%",
          boxShadow: "inset 0 0 2000px rgba(255, 255, 255, 0.5)",
          filter: "blur(15px) brightness(0.25)",
        }}
      >
        <Image
          fill
          src="/images/site/hero-background.jpg"
          alt="Hero Background"
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          p: 1,
        }}
      >
        <HeroContentComponent />
      </Box>
    </Box>
  );
}

export default HeroComponent;
