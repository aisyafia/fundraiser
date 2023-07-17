import { Container, Grid } from "@mui/material";
import GFMBanner from "../Assets/GoFundMe.jpg";
import { Link } from "react-router-dom";

const GoFundMe = () => {
  return (
    <Grid mt={2} mb={2} sx={{ display: { xs: "flex", md: "none" } }}>
      <Link
        to="https://www.gofundme.com/f/reusable-menstrual-kit-for-350-girls-in-samburu?utm_campaign=p_lico+share-sheet&utm_location=DASHBOARD&utm_medium=copy_link&utm_source=customer"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GFMBanner} alt="GoFundMe banner" width="100%" />
      </Link>
    </Grid>
  );
};

export { GoFundMe };
