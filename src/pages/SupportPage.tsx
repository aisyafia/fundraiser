import { Container, Grid, Typography, Button } from "@mui/material";
import Photo5 from "../Assets/PHOTO 5.jpg";

const SupportPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Support Us!
      </Typography>
      <Grid
        container
        direction={"row"}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom={4}
      >
        <Grid item maxWidth="500px" xs={6}>
          <Typography>
            This project will benefit 350 girls from Lodokejek Primary School,
            Lodokejek Secondary School, and Loltulelei Primary School. It costs
            €10 to provide Menstrual hygiene training, 2 undergarments and
            Menstrual kit with 6pcs that will last for two years. For 350 girls,
            our aim is to raise €3500.
          </Typography>
          <br />
          <Typography>
            To put it in perspective, a €20 donation will meet the menstrual
            needs of 2 girls for 2 years. Having these crucial needs met will
            empower these girls and give them an opportunity to attend classes
            as the male counterpart without constant fear of being left behind.
          </Typography>
          <br />
          <Typography>
            Please join us to support the dreams of these girls! Click on the
            'Donate' button, or below to go to our gofundme page!
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
            <Button variant="contained" sx={{ p: 2, align: "center" }}>
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
          <img src={Photo5} alt="kit for Samburu girls" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export { SupportPage };
