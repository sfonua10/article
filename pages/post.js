import Layout from "../components/MyLayout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Image from "../components/Image";

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
        <Layout>
          <h1>{this.state.article.title}</h1>
          <Image
            key={this.state.article.url}
            images={this.state.article.images}
          />

          {/* {this.state.article.content.map(text => text.text)} */}
        </Layout>
      </React.Fragment>
    );
  }
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://interview-project-17987.herokuapp.com/api/article/article-${id}`
  );
  const article = await res.json();

  console.log(`Fetched show: ${article.url}`);

  return { article };
};

export default Post;
