import { Container, Grid, Typography } from "@mui/material";
const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        About
      </Typography>
      <Grid>
        <Typography variant="body1">
          <em>
            <strong>Big Sister for Small Sister</strong>
          </em>{" "}
          is a 100% volunteer network made of women from all over the world who
          are donating their time, resources, and expertise to support young
          marginalised girls from Northern Kenya.
        </Typography>
      </Grid>
    </Container>
  );
};

export default HomePage;
