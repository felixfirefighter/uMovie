import React, { Component } from "react";
import { Card, Dimmer, Image, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { WIDTH_342 } from "../constants";
import {constructImageUrl} from '../utils/movieHelper'

class Movie extends Component {
  state = {
    active: false
  };

  handleOnMouseOver = () => {
    this.setState({
      active: true
    });
  };

  handleOnMouseLeave = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { active } = this.state;
    const { title, vote_average, id } = this.props;
    const rating = Math.round(vote_average) / 2;

    return (
      <Card
        style={{ cursor: "pointer" }}
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <Link to={`/movie/${id}`}>
          <Image src={constructImageUrl(WIDTH_342, this.props.poster_path)} />
          <Dimmer active={active}>
            <h1>{title}</h1>
            <Rating maxRating={5} defaultRating={rating} icon="star" disabled />
          </Dimmer>
        </Link>
      </Card>
    );
  }
}

export default Movie;
