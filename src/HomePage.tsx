import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import GoFundMe from "./Assets/GO FUND ME  PIC.png";
import Photo1 from "./Assets/PHOTO 1.jpg";
import Photo2 from "./Assets/PHOTO 2.jpg";
import Photo3 from "./Assets/PHOTO 3.jpg";
import Photo4 from "./Assets/PHOTO 4.jpg";
import Photo5 from "./Assets/PHOTO 5.jpg";

const HomePage = () => {
  return (
    <Container>
      <Grid container direction={"column"} marginTop={4} marginBottom={4}>
        <Typography variant="h2" align="center">
          Menstrual Kit Project
        </Typography>
        <Stack spacing={1} direction="row">
          <img src={Photo3} alt="" width="475px" />
          <img src={GoFundMe} alt="GOFUNDME banner" width="100%" />
        </Stack>
      </Grid>
      <Typography variant="h4" align="center">
        About
      </Typography>
      <Grid container direction={"row"} spacing={2} marginBottom={4}>
        <Grid item xs={6}>
          <img src={Photo2} alt="Nai and the girls" width="500px" />
        </Grid>
        <Grid item maxWidth="500px" xs={6}>
          <Typography>
            Hello, my name is Naisula Lepariyo and I have partnered with an
            organization called{" "}
            <a
              href="https://t4bfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              Together For The Better Foundation
            </a>{" "}
            to provide 350 Menstrual Kits to 350 girls in my former school.
          </Typography>
          <br />
          <Typography>
            Early this year when the Kenya Health Demography Survey report came
            out, I realised that my village where I grew up in Samburu was
            leading with a 50% rate of school dropout for girls. It was
            devastating news. Through phone calls and consultation with former
            teachers, we realised that Period Poverty was a major issue. Girls
            missed crucial classes at specific time of the month, hence being
            left behind to catch up. This has led to low motivation and at times
            even complete drop out.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container direction={"row"} spacing={2} marginBottom={4}>
        <Grid item maxWidth="500px" xs={6}>
          <Typography>
            Unfortunately for Samburu community we are pastoralist and fully
            reliant on rain-fed pasture for our livelihood.{" "}
            <a
              href="https://www.bbc.com/news/world-africa-51234135"
              target="_blank"
              rel="noreferrer"
            >
              Locust invasion
            </a>{" "}
            and prolonged{" "}
            <a
              href="https://www.bbc.com/news/world-africa-61437239"
              target="_blank"
              rel="noreferrer"
            >
              Drought
            </a>{" "}
            due to Climate Change really pushed people, leading to most
            households losing up to 70% of their livelihood. In turn, this has
            exacerbated Period Poverty as parents are struggling to put meals on
            the table and therefore Menstrual needs have become unattainable.
          </Typography>
          <br />
          <Typography>
            The need is very clear when we spoke to young girls, who would wake
            up looking forward to going to that Math class or Science class and
            realize their periods have just arrived unannounced. This means they
            will miss that class—and so many afterwards—as they wait a couple of
            days at home for their Period to end.
          </Typography>
          <br />
          <Typography>
            Why would a simple natural occurrence that is crucial to humanity
            become a dream crusher to these young girls?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={Photo1} alt="Samburu school kids" width="500px" />
        </Grid>
      </Grid>
      <Typography variant="h4" align="center">
        Our Goal
      </Typography>
      <Grid container direction={"row"} spacing={2} marginBottom={4}>
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
            <Button variant="contained" fullWidth>
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

export default HomePage;
