import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <Box>
      <AppBar position="static">
        <Container>
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
                  color: "orange",
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
                  color: "orange",
                  fontWeight: 800,
                  fontSize: "large",
                }}
              >
                {" "}
                Support Us
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
