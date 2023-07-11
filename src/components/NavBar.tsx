import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const handleOpenNav = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(e.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorNav(null);
  };

  const openGoFundMe = (e: React.MouseEvent<HTMLElement>) => {
    window.open(
      "https://www.gofundme.com/f/reusable-menstrual-kit-for-350-girls-in-samburu?utm_campaign=p_lico+share-sheet&utm_location=DASHBOARD&utm_medium=copy_link&utm_source=customer",
      "_blank"
    );
  };

  const NavBarItems = [
    { href: "/projects", title: "Projects" },
    { href: "/goal", title: "Our Goal" },
    { href: "/supportus", title: "Support Us" },
    { href: "/team", title: "Our Team" },
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              fontFamily: "Quicksand",
              fontWeight: 400,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Big Sister for Small Sister
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-haspopup="true"
              onClick={handleOpenNav}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNav}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              {NavBarItems.map((item) => {
                return (
                  <MenuItem key={item.title} onClick={handleCloseNav}>
                    <NavLink
                      to={`${item.href}`}
                      style={{
                        textDecoration: "none",
                        margin: "0.25rem",
                        color: "Coral",
                        fontWeight: 600,
                        fontSize: "large",
                      }}
                    >
                      {item.title}
                    </NavLink>
                  </MenuItem>
                );
              })}
              <MenuItem>
                <Button
                  onClick={openGoFundMe}
                  sx={{
                    display: "block",
                    margin: "0.25rem",
                    padding: "0.15rem",
                    color: "#720026",
                    fontWeight: 600,
                    fontSize: "large",
                    backgroundColor: "Coral",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                >
                  Donate now
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              flexGrow: 1,
              fontFamily: "Quicksand",
              fontWeight: 400,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Big Sister for Small Sister
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            {NavBarItems.map((item) => {
              return (
                <Button key={item.title} sx={{ display: "block" }}>
                  <NavLink
                    to={`${item.href}`}
                    style={{
                      textDecoration: "none",
                      margin: "0.25rem",
                      color: "Coral",
                      fontWeight: 600,
                      fontSize: "large",
                    }}
                  >
                    {item.title}
                  </NavLink>
                </Button>
              );
            })}

            <Button
              onClick={openGoFundMe}
              sx={{
                display: "block",
                margin: "0.75rem",
                padding: "0.25rem",
                color: "#720026",
                fontWeight: 800,
                fontSize: "large",
                backgroundColor: "Coral",
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              Donate now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
