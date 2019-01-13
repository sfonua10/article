import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Image from "../components/Image";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://interview-project-17987.herokuapp.com/api/article")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          articles: json
        });
      });
  }

  handleUpdateImage = () => {
    console.log("Event Handler Called");
  };

  render() {
    const { isLoaded, articles } = this.state;
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <article>
          <Navbar />
          <Image title={articles[0]} onUpdateImg={this.handleUpdateImage} />
        </article>
      );
    }
  }
}

export default Index;
