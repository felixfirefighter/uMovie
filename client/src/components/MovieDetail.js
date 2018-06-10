import React, { Component } from "react";

import {
  Dimmer,
  Loader,
  Grid,
  Image,
  Header,
  Rating,
  Popup,
  Button,
  Label
} from "semantic-ui-react";

import { constructImageUrl } from "../utils/movieHelper";
import { WIDTH_500 } from "../constants";

class MovieDetail extends Component {
  render() {
    const { movie, loading } = this.props;

    if (loading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    const rating = Math.round(movie.vote_average) / 2;
    const popupRating = `${movie.vote_average}/10`;

    return (
      <Grid stackable>
        <Grid.Column width={6}>
          <Image src={constructImageUrl(WIDTH_500, movie.poster_path)} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h1">{movie.title}</Header>

          <Label.Group>
            {movie.genres.map(genre => {
              return <Label content={genre.name} key={genre.id} />;
            })}
          </Label.Group>

          <Header as="h3">
            Release Date
            <Header.Subheader>{movie.release_date}</Header.Subheader>
          </Header>

          <Header as="h3">
            Runtime
            <Header.Subheader>{movie.runtime} minutes</Header.Subheader>
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

          <Header as="h3">Videos</Header>

          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            <Button
              color="black"
              content="Homepage"
              icon="arrow right"
              labelPosition="right"
            />
          </a>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MovieDetail;
