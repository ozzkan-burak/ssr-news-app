import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fecth from "isomorphic-fetch";
import Error from "./_error";

const News = () => {
  return (
    <Layout mainTitle="News">
      <div>
        <h2>List of News</h2>
      </div>
    </Layout>
  )
};

News.getInitialProps = async () => {
  let news;

  try {
    const res = await fetch("https://hn.algolia.com/v1/search?query=react");
    news = await res.json();
  } catch (error) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news
  };
}

export default News;