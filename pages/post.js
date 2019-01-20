import Layout from "../components/MyLayout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Image from "../components/Image";
import Video from "../components/Video";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article
    };
  }
  render() {
    console.log(this.state.article);
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/post.css" />
        </Head>
        <Layout>
          <h1> {this.state.article.title} </h1>
          <Image
            key={this.state.article.url}
            images={this.state.article.images}
          />
          <div className="content-container">
            <div class="spacer" />

            <Video video={this.state.article.video} />

            {this.state.article.content.map(text => (
              <React.Fragment>
                <h4>{text.subtitle}</h4>
                <p>{text.text}</p>
              </React.Fragment>
            ))}
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}
{
  /* <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3> */
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://interview-project-17987.herokuapp.com/api/article/article-${id}`
  );
  const article = await res.json();

  console.log(`Fetched show: ${article.url}`);

  return {
    article
  };
};

export default Post;
