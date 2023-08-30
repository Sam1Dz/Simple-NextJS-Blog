import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { visuallyHidden } from "@mui/utils";
import { useSnackbar } from "notistack";

/* FORMMIK */
import * as yup from "yup";
import { useFormik } from "formik";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

/* MATERIAL UI : LABS | COMPONENTS */
import LoadingButton from "@mui/lab/LoadingButton";

/* MATERIAL UI : ICONS */
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CloseIcon from "@mui/icons-material/Close";

import useResponsive from "@/helpers/hooks/use-responsive";

import type { AxiosError } from "axios";
import type { VariantType } from "notistack";

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

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});

function ContactFormComponents() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { isMobile, isScreenHeightUnder600, isScreenWidthUnder600 } =
    useResponsive();

  const notification = (message: string, variant?: VariantType) => {
    variant = variant ?? "default";

    enqueueSnackbar(message, {
      variant,
      action(key) {
        return (
          <React.Fragment>
            <Tooltip title="Close">
              <IconButton
                aria-label="close-snackbar"
                color="inherit"
                onClick={() => closeSnackbar(key)}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </React.Fragment>
        );
      },
    });
  };

  const contactForm = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (payload) => {
      await axios
        .post("/api/contact", payload)
        .then(() => {
          notification("Message sent successfully!", "success");
          contactForm.resetForm();
        })
        .catch((err) => {
          notification(
            err.response?.data.message || "Something went wrong!",
            "error"
          );
        });
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
                    label="Your Email *"
                    value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.email &&
                      Boolean(contactForm.errors.email)
                    }
                    helperText={
                      contactForm.touched.email && contactForm.errors.email
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="name"
                    name="name"
                    type="text"
                    label="Your Name *"
                    value={contactForm.values.name}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.name &&
                      Boolean(contactForm.errors.name)
                    }
                    helperText={
                      contactForm.touched.name && contactForm.errors.name
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    id="message"
                    name="message"
                    label="Your Message *"
                    multiline
                    rows={5}
                    value={contactForm.values.message}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.message &&
                      Boolean(contactForm.errors.message)
                    }
                    helperText={
                      contactForm.touched.message && contactForm.errors.message
                    }
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
              <LoadingButton
                size="large"
                variant="contained"
                type="submit"
                fullWidth={isMobile}
                loading={contactForm.isSubmitting}
              >
                Send Message
              </LoadingButton>
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
