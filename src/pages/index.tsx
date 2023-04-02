import React from "react";
import Head from "next/head";

import HeroComponent from "@/components/page/home/hero";
import FeaturedPostComponent from "@/components/page/home/featured-posts";

import DUMMY_DATA from "@/assets/data/dummy-data.json";

function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>NextJS Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        ></meta>
      </Head>

      <HeroComponent />
      <FeaturedPostComponent data={DUMMY_DATA} />
    </React.Fragment>
  );
}

export default HomePage;
