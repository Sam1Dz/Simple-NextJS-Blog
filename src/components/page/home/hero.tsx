import Image from "next/image";

/* MATERIAL UI | COMPONENTS */
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import useResponsive from "@/helpers/hooks/use-responsive";

function HeroComponent() {
  const {
    isScreenHeightUnder375,
    isScreenHeightUnder600,
    isScreenWidthUnder600,
  } = useResponsive();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: isScreenHeightUnder375
          ? "calc(100vh + 56px)"
          : "calc(100vh - 56px)",
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
        }}
      >
        <Container maxWidth="md">
          <Avatar
            sx={{
              width:
                isScreenHeightUnder600 || isScreenWidthUnder600 ? 150 : 300,
              height:
                isScreenHeightUnder600 || isScreenWidthUnder600 ? 150 : 300,
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
              isScreenHeightUnder600 || isScreenWidthUnder600 ? "h4" : "h2"
            }
            component="h1"
            gutterBottom
          >
            Hi, i&apos;m &quot;Sam1Dz&quot;
          </Typography>
          <Typography
            variant={
              isScreenHeightUnder600 || isScreenWidthUnder600 ? "body1" : "h5"
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
              fontSize: !(isScreenHeightUnder600 || isScreenWidthUnder600)
                ? "0.75rem"
                : "0.5rem",
            }}
          >
            &quot;Enhanced version from NextJS course by Maximilian
            Schwarzmüller&quot;
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default HeroComponent;
