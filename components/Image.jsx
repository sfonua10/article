import React, { Component } from "react";
import Head from "next/head";

class Image extends Component {
  state = {
    imageInfo: this.props.images,
    mainImage: this.props.images[0].mainUrl,
    imageTitle: this.props.images[0].title,
    imageDescription: this.props.images[0].description
  };

  handleImageClick = (newUrl, newTitle, newDescr) => {
    this.setState({
      mainImage: newUrl,
      imageTitle: newTitle,
      imageDescription: newDescr
    });
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/image.css" />
        </Head>
        <div className="container">
          <div className="wrapper">
            <section className="main">
              <img className="mainImg" src={`http://${this.state.mainImage}`} />
            </section>
          </div>
          <header>
            <div className="profile-name">
              <h4>{this.state.imageTitle}</h4>
              <h5>{this.state.imageDescription}</h5>
            </div>
            <div className="follow-btn">
              {this.state.imageInfo.map(thumbnails => (
                <img
                  className="profile-thumbnail"
                  alt={thumbnails.description}
                  src={`http://${thumbnails.thumbnailUrl}`}
                  onClick={() =>
                    this.handleImageClick(
                      thumbnails.mainUrl,
                      thumbnails.title,
                      thumbnails.description
                    )
                  }
                />
              ))}
            </div>
          </header>
        </div>

        {/* <h4>{this.state.imageTitle}</h4>
              <h4>{this.state.imageDescription}</h4>
              <div className="imgThumbNails">
                {this.state.imageInfo.map(thumbnails => (
                  <img
                    className="thumbImg"
                    src={`http://${thumbnails.thumbnailUrl}`}
                  />
                ))}
              </div> */}
      </React.Fragment>
    );
  }
}

export default Image;
