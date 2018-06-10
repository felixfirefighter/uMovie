import React, { Component } from "react";
import axios from "axios";

import {
  Dimmer,
  Loader,
  Grid,
  Image,
  Container,
  Header,
  Rating,
  Popup,
  Button
} from "semantic-ui-react";
import { constructImageUrl } from "../utils/movieHelper";
import { WIDTH_500 } from "../constants";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    const res = await axios.get(`/movie/${this.props.match.params.id}`);
    this.setState({ movie: res.data });
  }

  render() {
    const { movie } = this.state;

    if (movie === null || Object.keys(movie).length === 0) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    console.log(movie);

    const rating = Math.round(movie.vote_average) / 2;
    const popupRating = `${movie.vote_average}/10`;

    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Image src={constructImageUrl(WIDTH_500, movie.poster_path)} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h1">{movie.title}</Header>

            <Header as="h3">
              Release Date
              <Header.Subheader>{movie.release_date}</Header.Subheader>
            </Header>

            <Popup
              trigger={
                <Rating
                  icon="star"
                  maxRating={5}
                  defaultRating={rating}
                  disabled
                />
              }
              content={popupRating}
            />

            <p>Vote by {movie.vote_count} people</p>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              <Button
                content="Homepage"
                icon="arrow right"
                labelPosition="right"
              />
            </a>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default MovieDetail;
