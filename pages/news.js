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

Blogs.getInitialProps = async () => {
  let data;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
  } catch (error) {
    console.log("ERROR", err);
  }
}