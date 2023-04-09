import React from "react";
import Image from "next/image";

import { Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";

function HeroContentComponent() {
  const theme = useTheme();
  const screenWidth = useMediaQuery(theme.breakpoints.up("sm"));
  const screenHeight = useMediaQuery("(min-height:600px)");

  return (
    <React.Fragment>
      <Avatar
        sx={{
          width: screenWidth && screenHeight ? 300 : 150,
          height: screenWidth && screenHeight ? 300 : 150,
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
        variant={screenWidth && screenHeight ? "h2" : "h4"}
        component="h1"
        gutterBottom
      >
        Hi, i&apos;m &quot;Sam1Dz&quot;
      </Typography>
      <Typography
        variant={screenWidth && screenHeight ? "h5" : "body1"}
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
          fontSize: !(screenWidth && screenHeight) ? "0.5rem" : "0.75rem",
        }}
      >
        &quot;Enhanced version from NextJS course by Maximilian
        Schwarzmüller&quot;
      </Typography>
    </React.Fragment>
  );
}

export default HeroContentComponent;
