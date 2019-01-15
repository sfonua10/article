import React, { Component } from "react";
import Head from "next/head";

class Image extends Component {
  state = {
    m_title: this.props.title,
    mainUrl:
      "interview-project-17987.herokuapp.com/images/frontend/images/photo_1.jpg",
    thumbnailUrl: this.props.thumbnailUrl,
    title: "Deserunt occaecat occaecat incididunt",
    description:
      "Elit Lorem pariatur ullamco labore est dolore magna esse Lorem in duis. Commodo minim eiusmod cillum commodo deserunt deserunt pariatur et et id enim."
  };

  handleImageClick = (newUrl, newTitle, newDescr) => {
    this.setState({ mainUrl: newUrl, title: newTitle, description: newDescr });
  };

  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/test.css" />
        </Head>
        <div className="row">
          <div className="main">
            <h2>{this.props.m_title}</h2>
            <img
              className="fakeImg"
              src={`http://${this.state.mainUrl}`}
              alt="testImg"
            />
            <section className="navbar">
              <div className="titleDescr">
                <h4>{this.state.title}</h4>
                <p>{this.state.description}</p>
              </div>
              <div className="imgThumbNails">
                {this.state.thumbnailUrl.map(t => (
                  <img
                    // key={this.props.title}
                    // onClick={() => this.props.onImageClick(t.mainUrl)}
                    onClick={() =>
                      this.handleImageClick(t.mainUrl, t.title, t.description)
                    }
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
