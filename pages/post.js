import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <h1>{props.url}</h1>
        {/* <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={props.show.image.medium} /> */}
      </Layout>
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
