import { Container, Grid, Stack, Typography } from "@mui/material";
import GoFundMe from "../Assets/GO FUND ME  PIC.png";
import Photo3 from "../Assets/PHOTO 3.jpg";

const Header = () => {
  return (
    <Container>
      <Grid
        container
        direction={"column"}
        marginTop={4}
        marginBottom={4}
        alignItems={"center"}
      >
        <img src={GoFundMe} alt="GOFUNDME banner" width="700px" />
      </Grid>
    </Container>
  );
};

export default Header;
