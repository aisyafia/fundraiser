import { Container, Grid, Stack, Typography } from "@mui/material";
import GoFundMe from "../Assets/GO FUND ME  PIC.png";
import Photo3 from "../Assets/PHOTO 3.jpg";

const Header = () => {
  return (
    <Container>
      <Grid container direction={"column"} marginTop={4} marginBottom={4}>
        <Typography variant="h2" align="center">
          Menstrual Kit Project
        </Typography>
        <Stack spacing={1} direction="row" maxHeight={350}>
          <img src={Photo3} alt="" width="475px" />
          <img src={GoFundMe} alt="GOFUNDME banner" width="100%" />
        </Stack>
      </Grid>
    </Container>
  );
};

export default Header;
