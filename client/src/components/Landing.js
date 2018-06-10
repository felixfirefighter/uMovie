import React, { Component } from "react";
import { Container, Card, Header } from "semantic-ui-react";

import axios from "axios";
import Movie from "./Movie";

class Landing extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const res = await axios.get("/movie/popular");
    this.setState({
      movies: res.data.results
    });
  }

  renderMovies = () => {
    return this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie}/>;
    });
  };

  render() {
    return (
      <Container>
        <Header as='h2'>Popular Movies</Header>
        <Card.Group itemsPerRow={4} doubling>
          {this.renderMovies()}
        </Card.Group>
      </Container>
    );
  }
}

export default Landing;
