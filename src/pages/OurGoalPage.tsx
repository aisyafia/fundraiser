import { Container, Grid, Typography } from "@mui/material";
import Photo4 from "../Assets/PHOTO 4.jpg";

const OurGoalPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Our Goal
      </Typography>
      <Grid container direction={"row"} spacing={1} marginBottom={4}>
        <Grid item xs={6}>
          <img src={Photo4} alt="Samburu school girls" width="500px" />
        </Grid>
        <Grid item maxWidth="500px" xs={6}>
          <Typography>
            Aruna Varsani who is the founder of{" "}
            <a
              href="https://t4bfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              Together For The Better Foundation
            </a>{" "}
            is doing an amazing job to address Period Poverty and we have
            partnered with her to provide reusable, environmentally-friendly
            Menstrual kit that will last for 2 years. This project targets 350
            girls from Lodokejek Primary School, Lodokejek Secondary School, and
            Loltulelei Primary School. It costs €10 to provide Menstrual hygiene
            training, 2 undergarments and Menstrual kit with 6pcs that will last
            for two years. For 350 girls, our aim is to raise €3500.
          </Typography>
          <br />
          <Typography>
            To put it in perspective, a €20 donation will meet the menstrual
            needs of 2 girls for 2 years. Having these crucial needs met will
            empower these girls and give them an opportunity to attend classes
            as the male counterpart without constant fear of being left behind.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { OurGoalPage };
