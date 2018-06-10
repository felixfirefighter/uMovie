import React, { Component } from "react";
import Slider from "react-slick";
import Movie from "./Movie";

class MovieCarousel extends Component {
  renderMovies = () => {
    return this.props.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
  };

  render() {
    const settings = {
      // dots: true,
      speed: 500,
      slidesToShow: this.props.slides,
      slidesToScroll: this.props.slides
    };

    return <Slider {...settings}>{this.renderMovies()}</Slider>;
  }
}

export default MovieCarousel;
