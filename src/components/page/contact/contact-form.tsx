import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { visuallyHidden } from "@mui/utils";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/* MATERIAL UI : ICONS */
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import useResponsive from "@/helpers/hooks/use-responsive";

function Social() {
  return (
    <React.Fragment>
      <Link href="https://x.com/sam1d_z" target="_blank">
        <IconButton
          aria-label="x-twitter"
          size="large"
          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          <SvgIcon>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </SvgIcon>
          <Box component="span" sx={visuallyHidden}>
            X/Twitter Link
          </Box>
        </IconButton>
      </Link>
      <Link href="https://instagram.com/pratama_dimas01/" target="_blank">
        <IconButton
          aria-label="instagram"
          size="large"
          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          <InstagramIcon />
          <Box component="span" sx={visuallyHidden}>
            Instagram Link
          </Box>
        </IconButton>
      </Link>
      <Link href="mailto:pratamadimas.172001@gamail.com" target="_blank">
        <IconButton
          aria-label="email"
          size="large"
          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          <EmailOutlinedIcon />
          <Box component="span" sx={visuallyHidden}>
            Email Link
          </Box>
        </IconButton>
      </Link>
    </React.Fragment>
  );
}

function ContactFormComponents() {
  const { isMobile, isScreenHeightUnder600, isScreenWidthUnder600 } =
    useResponsive();

  const contactForm = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (v) => {
      console.log(v);
    },
  });

  return (
    <React.Fragment>
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Box
          component="div"
          sx={{
            position: "inherit",
            height: "100%",
            boxShadow: "inset 0 0 2000px rgba(255, 255, 255, 0.5)",
            filter: "blur(100px) brightness(0.25)",
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
            <Typography
              variant={
                isScreenHeightUnder600 || isScreenWidthUnder600 ? "h4" : "h2"
              }
              component="h1"
              sx={{ fontWeight: "bold" }}
            >
              CONTACT ME
            </Typography>
            <Typography
              variant={
                isScreenHeightUnder600 || isScreenWidthUnder600 ? "body1" : "h5"
              }
              component="span"
              gutterBottom
            >
              How can i help you?
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container component="section" maxWidth="md">
        <Box
          sx={{
            width: "100%",
            mt: 2,
          }}
        >
          <form onSubmit={contactForm.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Your Email"
                    onChange={contactForm.handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="name"
                    name="name"
                    type="text"
                    label="Your Name"
                    onChange={contactForm.handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    id="message"
                    name="message"
                    label="Your Message"
                    multiline
                    rows={5}
                    onChange={contactForm.handleChange}
                    value={contactForm.values.message}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box
              component="div"
              sx={{
                mt: 2,
                mb: { md: 0, xs: 4 },
                display: { md: "flex", xs: "block" },
              }}
            >
              <Box
                component="div"
                sx={{ display: { md: "flex", xs: "none" }, flexGrow: 1 }}
              >
                <Social />
              </Box>
              <Button
                size="large"
                variant="contained"
                type="submit"
                fullWidth={isMobile}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
        <Divider sx={{ display: { md: "none" } }}>
          <Social />
        </Divider>
      </Container>
    </React.Fragment>
  );
}

export default ContactFormComponents;
