import React from "react";
import Head from "next/head";

function AllPostsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorial and posts!"
        />
      </Head>

      <h1>All Posts Page</h1>
    </React.Fragment>
  );
}

export default AllPostsPage;
