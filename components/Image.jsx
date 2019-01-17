import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    {/* <h1> {props.show.name} </h1>
    <p> {props.show.summary.replace(/<[/]?p>/g, "")} </p>
    <img src={props.show.image.medium} /> */}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { url } = context.query;
  const res = await fetch(
    `https://interview-project-17987.herokuapp.com/api/article/${url}`
  );
  const article = await res.json();

  let i = 1;
  article.map(obj => {
    obj.id = i++;
  });
  console.log(`Fetched article: ${article.url}`);

  return {
    article
  };
};

export default Post;
