import { Container, Grid, Typography, Button } from "@mui/material";
import Photo5 from "../Assets/PHOTO 5.jpg";

const SupportPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Support Us!
      </Typography>
      <Grid container direction={"row"} spacing={2} marginBottom={4}>
        <Grid item maxWidth="500px" xs={6}>
          <Typography>
            Join us in providing support to our girls! Click on the button below
            to go to our gofundme page!
          </Typography>
          <br />
          <Typography>
            If you are in Kenya please donate directly to{" "}
            <a
              href="https://t4bfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              Together For The Better Foundation
            </a>{" "}
            at LIPA NA MPESA TILL NO:52 650 45 and send the message to
            0722-746-333 to ensure that its captured for Samburu Project.
          </Typography>
          <br />
          <a
            href="https://www.gofundme.com/f/reusable-menstrual-kit-for-350-girls-in-samburu?utm_campaign=p_lico+share-sheet&utm_location=DASHBOARD&utm_medium=copy_link&utm_source=customer"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" sx={{ p: 2 }}>
              Send donation on our gofundme
            </Button>
          </a>
          <br />
          <br />
          <Typography>
            Share the link to your friends and family. Leave messages of
            encouragement to the girls and we will add and publish them in the
            Memory Board for the girls.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={Photo5} alt="kit for Samburu girls" width="500px" />
        </Grid>
      </Grid>
    </Container>
  );
};

export { SupportPage };
