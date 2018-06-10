import React, { Component } from "react";
import { Card, Dimmer, Image, Rating, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { WIDTH_185 } from "../constants";
import { constructImageUrl } from "../utils/movieHelper";

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
    const { title, vote_average, id, release_date } = this.props;
    const rating = Math.round(vote_average) / 2;

    return (
      <Card
        style={{ cursor: "pointer" }}
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <Link to={`/movie/${id}`}>
          <Image src={constructImageUrl(WIDTH_185, this.props.poster_path)} />
          <Dimmer active={active}>
            <Header as="h3" style={{ color: "white" }}>
              {title}
            </Header>
            <Rating
              maxRating={rating}
              defaultRating={rating}
              icon="star"
              disabled
              style={{ marginBottom: "8px" }}
            />
            <p>{release_date}</p>
          </Dimmer>
        </Link>
      </Card>
    );
  }
}

export default Movie;
