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
        <hr/>
        {news.map((news, i)=> {
          <p key={i}>
            <a href={news.url} target="_blank">{news.title}</a>
          </p>
        })}
      </div>
    </Layout>
  )
};

News.getInitialProps = async () => {
  let news;

  try {
    const res = await fetch("https://hn.algolia.com/api/v1/search?query=react");
    news = await res.json();
  } catch (error) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news: news.hits
  };
}

export default News;
