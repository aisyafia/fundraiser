import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavBarItems = [
    { href: "/goal", title: "Our Goal" },
    { href: "/supportus", title: "Support Us" },
    { href: "/team", title: "Our Team" },
  ];
  return (
    <Box>
      <AppBar position="static">
        <Container
          sx={{ display: "flex", justifyContent: "space-between", flexGrow: 3 }}
        >
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
            <Box>
              <Grid>
                {NavBarItems.map((item) => {
                  return (
                    <NavLink
                      key={item.title}
                      to={`${item.href}`}
                      style={{
                        textDecoration: "none",
                        margin: "0.75rem",
                        padding: "0.25rem",
                        color: "Coral",
                        fontWeight: 800,
                        fontSize: "large",
                      }}
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
