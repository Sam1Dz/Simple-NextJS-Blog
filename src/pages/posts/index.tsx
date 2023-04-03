import React from "react";
import Head from "next/head";

import AllPostsComponent from "@/components/page/posts/all-posts";

import DUMMY_DATA from "@/assets/data/dummy-data.json";

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

      <AllPostsComponent data={DUMMY_DATA} />
    </React.Fragment>
  );
}

export default AllPostsPage;
