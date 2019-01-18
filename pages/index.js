import React, { Component } from "react";
import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import Image from "../components/Image";
import Video from "../components/Video";
import Link from "next/link";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles
    };
  }

  render() {
    let i = 1;
    this.state.articles.map(obj => {
      obj.id = i++;
    });

    console.log(this.state.articles[0].url);
    return (
      <Layout>
        <h1>Articles</h1>
        <ul>
          {this.state.articles.map(obj => (
            <li key={obj.id}>
              <Link as={`/p/${obj.id}`} href={`/post?id=${obj.id}`}>
                <a> {obj.title} </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://interview-project-17987.herokuapp.com/api/article"
  );
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    articles: data
  };
};

export default Index;
