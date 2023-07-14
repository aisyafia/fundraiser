import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const SignUpPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm === null) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        currentForm,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const resetForm = e.currentTarget as HTMLFormElement;
    resetForm.reset();
  };

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8 }}
        sx={{ maxWidth: "100%", alignItems: "center" }}
      >
        <Grid item>
          <Typography>
            Our network is young and growing. Send us a message and our talented
            volunteers will reach out back to you. We welcome all sorts of
            collaboration. We also welcome warm messages and encouraging words.
            This network is 100% done in voluntary basis, and we appreciate your
            appreciation.{" "}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { m: 0.5, maxWidth: "90%" },
          }}
        >
          <form ref={form} onSubmit={sendEmail} action="?" method="POST">
            <TextField
              fullWidth
              variant="filled"
              type="text"
              name="user_name"
              required
              label="Your name"
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              name="user_email"
              required
              label="Your email"
            />
            <TextField
              fullWidth
              multiline
              rows={7}
              variant="filled"
              type="text"
              name="user_message"
              required
              label="Your message"
            />
            <Button type="submit" variant="contained" color="secondary">
              Send message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export { SignUpPage };
