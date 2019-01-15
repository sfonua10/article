import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Video from "../components/Video";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      images: [],
      content: [],
      isLoaded: false
    };
  }

  // componentDidMount() {
  //   fetch("https://interview-project-17987.herokuapp.com/api/article")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         articles: json,
  //         images: json.map(article => {
  //           const myImages = { images: article.images };
  //           return myImages;
  //         }),
  //         content: json.map(article => {
  //           const myContent = { content: article.content };
  //           return myContent;
  //         })
  //       });
  //     });
  // }

  componentDidMount() {
    fetch("https://interview-project-17987.herokuapp.com/api/article/article-1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          articles: json
          // images: json.map(article => {
          //   const myImages = { images: article.images };
          //   return myImages;
          // }),
          // content: json.map(article => {
          //   const myContent = { content: article.content };
          //   return myContent;
          // })
        });
      });
  }

  // handleImageClick = newUrl => {
  //   console.log("Event Handler Called", newUrl);
  // };

  render() {
    // console.log("main title", this.state.articles.title);
    // console.log(this.state.images);
    // console.log(this.state.content);
    const { isLoaded, articles } = this.state;
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <article>
          <Navbar />
          <Image
            key={articles.url}
            m_title={articles.title}
            mainUrl={articles.images.map(mainImg => mainImg.mainUrl)}
            thumbnailUrl={articles.images}
            title={articles.images.map(i_t => i_t.title)}
            description={articles.images.map(i_d => i_d.description)}
          />{" "}
          {/* {this.state.articles.map(article => (
                    <React.Fragment>
                      <Image
                        key={article.url}
                        onImageClick={this.handleImageClick}
                        title={article.title}
                        mainUrl={article.images.map(i => i.mainUrl)}
                        thumbnailUrl={article.images}
                        i_title={article.images.map(i_t => i_t.title)}
                        i_description={article.images.map(i_d => i_d.description)}
                      />
                      <Video videoUrl={article.video} />
                    </React.Fragment>
                  ))} */}
          {/* <Image title={articles[0]} onUpdateImg={this.handleUpdateImage} /> */}{" "}
        </article>
      );
    }
  }
}

export default Index;
