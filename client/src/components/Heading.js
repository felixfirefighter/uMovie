import React from "react";
import { Header, Container, Divider, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../img/tmdb-logo.svg";

const Heading = () => {
  return (
    <Container style={{ paddingTop: "24px" }}>
      <Grid>
        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column>
            <Header as="h1">
              <Link to="/" style={{ color: "inherit" }}>
                uMovie
              </Link>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
              <Image src={Logo} size="small" floated="right" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />
    </Container>
  );
};

export default Heading;
