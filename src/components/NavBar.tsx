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
    { href: "/supportus", title: "Support Us" },
    { href: "/team", title: "Our Team" },
  ];
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily: "Quicksand",
              fontSize: "1.5rem",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Big Sis for Small Sis
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
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
                  md: "none",
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
                        fontSize: "1rem",
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
                    fontSize: "1rem",
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
                md: "none",
              },
              flexGrow: 1,
              fontFamily: "Quicksand",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Big Sis for Small Sis
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-evenly",
              display: {
                xs: "none",
                md: "flex",
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
                      fontSize: "1rem",
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
                fontSize: "1rem",
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

export { NavBar };
