import { Container, Grid, ImageList, ImageListItem } from "@mui/material";

const Header = () => {
  const itemData = [
    { title: "Photo5", desc: "Samburu kids with the kit", img: "PHOTO 5" },
    {
      title: "GoFundMe",
      desc: "GOFUNDME banner",
      img: "GoFundMe",
    },
    {
      title: "Photo3",
      desc: "hands holding the kit",
      img: "PHOTO 3",
    },
    {
      title: "Photo6",
      desc: "the menstrual kit",
      img: "PHOTO 6",
    },
  ];

  return (
    <Container>
      <Grid container marginTop={0.5} marginBottom={3}>
        <ImageList
          variant="quilted"
          sx={{ width: 1550, height: 165 }}
          cols={4}
          rowHeight={175}
        >
          {itemData.map((item) => {
            return (
              <ImageListItem key={item.title}>
                <img
                  src={require("../Assets/" + item.img + ".jpg")}
                  alt={item.desc}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Grid>
    </Container>
  );
};

export default Header;
