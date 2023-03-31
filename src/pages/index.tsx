import React from "react";
import Head from "next/head";

import HeroComponent from "@/components/page/home/hero";
import FeaturedPostComponent from "@/components/page/home/featured-posts";

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
      <FeaturedPostComponent />
    </React.Fragment>
  );
}

export default HomePage;
