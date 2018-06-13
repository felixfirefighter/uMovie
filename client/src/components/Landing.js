import React, { Component } from "react";
import { Container, Header, Divider, Dimmer, Loader } from "semantic-ui-react";

import axios from "axios";
import MovieCarousel from "./MovieCarousel";

class Landing extends Component {
  state = {
    loading: true,
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: []
  };

  async componentDidMount() {
    const popularMovies = await axios.get("/movie/popular");
    const topRatedMovies = await axios.get("/movie/top_rated");
    const upcomingMovies = await axios.get("/movie/upcoming");

    this.setState({
      loading: false,
      popularMovies: popularMovies.data.results,
      topRatedMovies: topRatedMovies.data.results,
      upcomingMovies: upcomingMovies.data.results
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Dimmer active page inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Container style={{ marginBottom: "16px" }}>
        <Header as="h2">Popular Movies</Header>
        <Divider />
        <MovieCarousel movies={this.state.popularMovies} slides={6} />

        <Header as="h2">Top Rated Movies</Header>
        <Divider />
        <MovieCarousel movies={this.state.topRatedMovies} slides={6} />

        <Header as="h2">Upcoming Movies</Header>
        <Divider />
        <MovieCarousel movies={this.state.upcomingMovies} slides={6} />
      </Container>
    );
  }
}

export default Landing;
