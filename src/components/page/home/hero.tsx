import Image from "next/image";
import { Avatar, Box, Typography } from "@mui/material";

import useResponsive from "@/helpers/hooks/responsive-screen-hook";

function HeroComponent() {
  const { isHeightUnder375, isScreenWidthUnder600, isScreenHeightUnder600 } =
    useResponsive();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: isHeightUnder375 ? "calc(100vh - 56px)" : "calc(100vh + 56px)",
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
        <Avatar
          sx={{
            width: isScreenWidthUnder600 && isScreenHeightUnder600 ? 300 : 150,
            height: isScreenWidthUnder600 && isScreenHeightUnder600 ? 300 : 150,
            boxShadow: "0 1px 8px 16px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            m: "auto",
            mb: 2,
          }}
        >
          <Image
            src="/images/site/sam1dz-pp.jpg"
            alt="Sam1Dz Profile Photo"
            fill
          />
        </Avatar>

        <Typography
          variant={
            isScreenWidthUnder600 && isScreenHeightUnder600 ? "h2" : "h4"
          }
          component="h1"
          gutterBottom
        >
          Hi, i&apos;m &quot;Sam1Dz&quot;
        </Typography>
        <Typography
          variant={
            isScreenWidthUnder600 && isScreenHeightUnder600 ? "h5" : "body1"
          }
          component="p"
          gutterBottom
        >
          This is just an example of a Web Blog created by NextJS
        </Typography>
        <Typography
          variant="overline"
          component="p"
          sx={{
            lineHeight: "inherit",
            fontSize: !(isScreenWidthUnder600 && isScreenHeightUnder600)
              ? "0.5rem"
              : "0.75rem",
          }}
        >
          &quot;Enhanced version from NextJS course by Maximilian
          Schwarzmüller&quot;
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroComponent;
