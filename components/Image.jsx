import React, { Component } from "react";
import Head from "next/head";

class Image extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/test.css" />
        </Head>
        <div className="row">
          <div className="main">
            <h2>{/*{this.props.title}*/}</h2>
            <img
              className="fakeImg"
              src={`http://${this.props.title.images[0].mainUrl}`}
              alt="testImg"
            />
            <section className="navbar">
              <div className="titleDescr">
                <p>{this.props.title.images[0].title}</p>
                <p>{this.props.title.images[0].description}</p>
              </div>
              <div className="imgThumbNails">
                {this.props.title.images.map(t => (
                  <img
                    key={this.props.title}
                    onClick={this.props.onUpdateImg}
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
