import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamData = [
    {
      name: "Naisula Lepariyo",
      desc: "was born and raised Samburu in Northern Kenya and currently lives in Germany. The challenges faced by girls from her community are familiar to her. She is an independent consultant and writer on indigenous societies, pastoralism, gender, and education. She holds an MSc In Development Evaluation and Management. She founded the network after realising that no support is to little for the girls in her community.",
      photo: "nai",
      url: "",
    },
    {
      name: "Lutfia Aisya",
      desc: "Born in Indonesia, but currently reside in the Netherlands, Fia studied in the Institute of Development Policy and Management (IOB) in University Antwerp with Naisula. She is now switching careers into web development. She created this website because she believes that girls' access to life and education should not be affected by a natural occurrence, like menstruation.",
      photo: "fia",
      url: "https://www.linkedin.com/in/aisyafia/",
    },
    {
      name: "Chipo Nleya",
      desc: "is from UK and lives in Germany. She is a teacher by profession and passionate that girls get equal opportunity in classroom.",
      photo: "chipo",
      url: "",
    },
    {
      name: "Aruna Varsani",
      desc: "is the Founder of Together  For The Better Foundation  and has dedicated her life to addressing Period Poverty in Kenya. Aruna is currently based in Kenya and travelling around the country, teaching women how to make reusable sanitary towels, especially for young girls in school.",
      photo: "aruna",
      url: "https://www.wef.org.in/aruna-varsani/",
    },
    {
      name: "Antonio Ackerman",
      desc: "is currently based in the Netherlands and is the Director of Manda  Production a film company based in the Netherlands. Antonio also uses her platform for companies that are positively impacting our environment.",
      photo: "antonio",
      url: "https://mandaproductions.nl/en/video-production-company/",
    },
    {
      name: "Hiyoli Togawa",
      desc: "is well known Violist and an artist. Hiyoli grew up in the Rhineland and having Japanese and Australian roots, Hiyoli Togawa speaks her three “mother tongues” German, Japanese and Australian fluently. Building bridges between people, cultures and art by means of words and sounds is a primary concern of the cosmopolitan artist.",
      photo: "hiyoli",
      url: "http://www.hiyoli-togawa.com/en/welcome/",
    },
    {
      name: "Dagmar Tischman",
      desc: "born in Rhineland, Dagmar spend a bit of  her childhood in California USA before moving back to Germany. She studied as a teacher but in 1983  she decided to switch career and do what she loves best - Painting. Her work has been exhibited in big and small spaces.",
      photo: "dagmar",
      url: "http://artwork-tinschmann.de/cv",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" align="center">
        Join the team
      </Typography>
      <Grid
        container
        sx={{
          mb: 2,
          mt: 0.5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {teamData.map((team) => {
          return (
            <Card key={team.photo} sx={{ maxWidth: 345, m: 0.7 }}>
              <CardActionArea href={team.url} target="_blank" rel="noreferrer">
                <CardMedia
                  sx={{ height: 350 }}
                  image={require("../Assets/" + team.photo + ".jpeg")}
                  title={team.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {team.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {team.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
        <Card sx={{ maxWidth: 345, m: 0.7 }}>
          <CardContent>
            <Typography sx={{ fontSize: "medium" }}>
              Our network is rich and diverse but we all believe that we stand
              on the shoulders of women before us and want to provide standing
              stones for younger girls behind us.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{ fontSize: "medium" }}>Join us today</Typography>
          </CardContent>
          <CardActions>
            <Link to="/joinus">
              <Button
                variant="contained"
                color="secondary"
                // onClick={() => console.log(process.env)}
              >
                Sign up to join
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export { TeamPage };
