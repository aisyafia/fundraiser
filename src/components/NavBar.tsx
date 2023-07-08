import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "6", md: "flex" },
                fontFamily: "Quicksand",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Samburu Menstrual Kit Project
            </Typography>
            <Box sx={{ flexGrow: 3 }}>
              <Link
                href="/goal"
                sx={{
                  fontFamily: "Quicksand",
                  p: 2,
                  color: "Coral",
                  fontWeight: 800,
                  fontSize: "large",
                }}
              >
                Our Goal
              </Link>
              <Link
                href="/supportus"
                sx={{
                  fontFamily: "Quicksand",
                  p: 2,
                  color: "Coral",
                  fontWeight: 800,
                  fontSize: "large",
                }}
              >
                {" "}
                Support Us
              </Link>
              <Link
                href="/team"
                sx={{
                  fontFamily: "Quicksand",
                  p: 2,
                  color: "Coral",
                  fontWeight: 800,
                  fontSize: "large",
                }}
              >
                Our Team
              </Link>
              <NavLink to="/goal">Our Goal</NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
