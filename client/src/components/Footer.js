import React from "react";
import { Image, Container, Header } from "semantic-ui-react";
import Logo from "../img/tmdb-logo.svg";

export default () => {
  return (
    <Container>
      <div
        style={{
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <a
          href="https://github.com/leeyt54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Header as="h4" content="Made by YoongTi Lee" />
        </a>

        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Logo} size="small" floated="right" />
        </a>
      </div>
    </Container>
  );
};
