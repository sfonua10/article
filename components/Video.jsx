import React, { Component } from "react";
import Head from "next/head";

class Video extends Component {
  state = {
    video: this.props.video
  };
  render() {
    return (
      <React.Fragment>
        <div className="vid-img">
          <img
            src="https://images.unsplash.com/photo-1506960002266-9cebbf4e9549?w=210&h=118&fit=crop"
            alt=""
          />

          <h5 className="vid-info">{this.state.video.title}</h5>
          <h6 className="vid-info">{this.state.video.description}</h6>
        </div>
      </React.Fragment>
    );
    t;
  }
}

export default Video;
