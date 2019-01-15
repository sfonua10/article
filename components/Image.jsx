import React, { Component } from "react";
import Head from "next/head";

class Image extends Component {
  state = {
    title: this.props.title,
    mainUrl:
      "interview-project-17987.herokuapp.com/images/frontend/images/photo_1.jpg",
    thumbnailUrl: this.props.thumbnailUrl,
    i_title: this.props.i_title,
    i_description: this.props.i_description
  };

  handleImageClick = newUrl => {
    this.setState({ mainUrl: newUrl });
  };

  render() {
    console.log("thumbnailUrl", this.state.mainUrl[0]);
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/test.css" />
        </Head>
        <div className="row">
          <div className="main">
            <h2>{this.state.title}</h2>
            <img
              className="fakeImg"
              src={`http://${this.state.mainUrl}`}
              alt="testImg"
            />
            <section className="navbar">
              <div className="titleDescr">
                <h4>{this.state.i_title[0]}</h4>
                <p>{this.state.i_description}</p>
              </div>
              <div className="imgThumbNails">
                {this.state.thumbnailUrl.map(t => (
                  <img
                    // key={this.props.title}
                    // onClick={() => this.props.onImageClick(t.mainUrl)}
                    onClick={() => this.handleImageClick(t.mainUrl)}
                    className="myImg"
                    src={`http://${t.thumbnailUrl}`}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;
