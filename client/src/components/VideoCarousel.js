import React, { Component } from "react";
import Slider from "react-slick";
import Video from "./Video";
import { constructThumbnailUrl } from "../utils/movieHelper";

class MovieCarousel extends Component {
  renderVideos = () => {
    console.log(this.props.videos);

    return this.props.videos.map(video => {
      return (
        <Video
          key={video.id}
          id={video.key}
          placeholder={constructThumbnailUrl(video.key)}
          source={video.site.toLowerCase()}
        />
      );
    });
  };

  render() {
    const settings = {
      // dots: true,
      speed: 500,
      slidesToShow: this.props.slides,
      slidesToScroll: this.props.slides,
      infinite: false
    };

    return <Slider {...settings}>{this.renderVideos()}</Slider>;
  }
}

export default MovieCarousel;
