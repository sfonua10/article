import React from "react";
import Head from "next/head";

const About = () => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="/static/test.css" />
    </Head>
    <p className="some-class-name">Is this working!</p>
  </div>
);

export default About;
