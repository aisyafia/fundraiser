import { Container, Grid, Typography } from "@mui/material";
import Photo1 from "../Assets/PHOTO 1.jpg";
import Photo2 from "../Assets/PHOTO 2.jpg";

const HomePage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default HomePage;
