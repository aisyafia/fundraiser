import { Container, Grid } from "@mui/material";
import GoFundMe from "../Assets/GO FUND ME  PIC.png";
import Photo3 from "../Assets/PHOTO 3.jpg";
import Photo5 from "../Assets/PHOTO 5.jpg";
import Photo6 from "../Assets/PHOTO 6.jpg";

const Header = () => {
  return (
    <Container>
      <Grid
        container
        direction={"row"}
        marginTop={0.5}
        marginBottom={4}
        justifyContent={"center"}
      >
        <img
          src={Photo5}
          alt="Samburu kids with the kit"
          style={{ maxHeight: "200px", borderRadius: 5 }}
        />
        <img
          src={GoFundMe}
          alt="GOFUNDME banner"
          style={{ maxHeight: "200px", borderRadius: 5 }}
        />
        <img
          src={Photo3}
          alt="hands holding the kit"
          style={{ maxHeight: "200px", borderRadius: 5 }}
        />
        <img
          src={Photo6}
          alt="the menstrual kit"
          style={{ maxHeight: "200px", borderRadius: 5 }}
        />
      </Grid>
    </Container>
  );
};

export default Header;
