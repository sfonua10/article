import React, { Component } from "react";
import Head from "next/head";

class Video extends Component {
  state = {
    url: this.props.videoUrl
  };
  render() {
    console.log("video url", this.state.url);
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/test.css" />
        </Head>
        {/* <div className="Flexible-container">
          <iframe
            width="100"
            height="100"
            src={this.state.url.url}
            frameborder="0"
            allowfullscreen
          />
        </div> */}
                  <iframe
            width="100"
            height="100"
            frameborder="0"
            allowfullscreen
            alt="video placeholder"
          />
      </React.Fragment>
    );
  }
}

export default Video;
