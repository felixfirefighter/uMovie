import React from "react";
import { Embed } from "semantic-ui-react";

const Video = props => {
  return (
    <Embed
      id={props.id}
      source={props.source}
      placeholder={props.placeholder}
      style={{ margin: "4px" }}
    />
  );
};

export default Video;
