import { Container, Grid, Typography } from "@mui/material";
import Photo1 from "../Assets/PHOTO 1.jpg";
import Photo2 from "../Assets/PHOTO 2 2.jpg";

const ProjectsPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Project Samburu Menstrual Kit
      </Typography>
      <Grid
        container
        direction={"row"}
        marginBottom={1}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          <img src={Photo2} alt="Nai and the girls" width="100%" />
        </Grid>
        <Grid item maxWidth="300px" xs={6}>
          <Typography>
            This is our first project, where we partnered with{" "}
            <a
              href="https://t4bfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              Together For The Better Foundation
            </a>{" "}
            to provide 350 Menstrual Kits to 350 girls in three schools. Aruna
            Varsani founded the Foundation to address Period Poverty through the
            provision of environmentally friendly reusable sanitary pads.
          </Typography>
          <br />
          <Typography>
            Early this year when the Kenya Health Demography Survey report came
            out, our founder, Naisula Lepariyo, realised that the village where
            she grew up in Samburu was leading with a 50% rate of school dropout
            for girls. It was devastating news.
          </Typography>
          <br />
          <Typography>
            Through phone calls and consultation with her former teachers, she
            realised that Period Poverty was a major issue. Girls missed crucial
            classes at specific time of the month, hence being left behind to
            catch up. This has led to low motivation and—at times—even complete
            drop out.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction={"row"}
        marginBottom={4}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
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
        <Grid item xs={6} padding={1}>
          <img src={Photo1} alt="Samburu school kids" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export { ProjectsPage };
