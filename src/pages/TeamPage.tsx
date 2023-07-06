import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import FiaPhoto from "../Assets/172707 small jp.jpg";
import LIIcon from "../Assets/LinkedIn_logo_initials.png.webp";
import GHIcon from "../Assets/GitHub-Mark.png";
import Photo2 from "../Assets/PHOTO 2.jpg";

const TeamPage = () => {
  return (
    <Container
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 285,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          mr: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 275,
            width: "90%",
            borderRadius: 10,
            alignSelf: "center",
            ml: 2,
          }}
          image={Photo2}
          title="Nai picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Naisula Lepariyo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            sample text on Naisula's profile
          </Typography>
        </CardContent>
        <CardActions sx={{ alignItems: "center" }}>
          <Button size="small">
            <Link href="" target="_blank" rel="noreferrer">
              <img src={LIIcon} alt="Linkedin icon" width="30px" />
            </Link>
          </Button>
          <Button size="small">
            <Link href="" target="_blank" rel="noreferrer">
              <img src={GHIcon} alt="Github icon" width="30px" />
            </Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 285,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          mr: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 275,
            width: "90%",
            borderRadius: 10,
            alignSelf: "center",
            ml: 2,
          }}
          image={Photo2}
          title="Nai picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aruna Varsani
          </Typography>
          <Typography variant="body2" color="text.secondary">
            sample text on Aruna's profile
          </Typography>
        </CardContent>
        <CardActions sx={{ alignItems: "center" }}>
          <Button size="small">
            <Link href="" target="_blank" rel="noreferrer">
              <img src={LIIcon} alt="Linkedin icon" width="30px" />
            </Link>
          </Button>
          <Button size="small">
            <Link href="" target="_blank" rel="noreferrer">
              <img src={GHIcon} alt="Github icon" width="30px" />
            </Link>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 285,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 275,
            width: "90%",
            borderRadius: 10,
            alignSelf: "center",
            ml: 2,
          }}
          image={FiaPhoto}
          title="Fia picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lutfia Aisya
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Born in Indonesia, but currently reside in the Netherlands, Fia
            studied in the Institute of Development Policy and Management (IOB)
            in University Antwerp with Naisula. She is now switching career into
            web development. She created this website because she believes that
            girls' access to live and education should not be affected by a
            natural occurence, like menstruation
          </Typography>
        </CardContent>
        <CardActions sx={{ alignItems: "center" }}>
          <Button size="small">
            <Link
              href="https://www.linkedin.com/in/aisyafia/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LIIcon} alt="Linkedin icon" width="30px" />
            </Link>
          </Button>
          <Button size="small">
            <Link
              href="https://github.com/aisyafia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GHIcon} alt="Github icon" width="30px" />
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default TeamPage;
