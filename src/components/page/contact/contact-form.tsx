import { useFormik } from "formik";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function ContactFormComponents() {
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
    <Box
      component="section"
      sx={{
        width: "90%",
        maxWidth: "50rem",
        m: "auto",
        mt: 2,
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
            How can i help you?
          </Typography>

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

            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
              <Button size="large" variant="contained" type="submit">
                Send Message
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactFormComponents;
