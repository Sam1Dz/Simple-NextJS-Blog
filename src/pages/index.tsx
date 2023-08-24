import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import HeroComponent from "@/components/page/home/hero";
import FeaturedPostComponent from "@/components/page/home/featured-posts";

import { getFeaturedPosts } from "@/helpers/posts-util";

import type { PostData } from "@/helpers/posts-util";

interface HomePageProps {
  posts: PostData[];
}

function HomePage(props: HomePageProps) {
  const { posts } = props;

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
      <FeaturedPostComponent data={posts} />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
