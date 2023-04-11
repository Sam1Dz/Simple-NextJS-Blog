import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import PostContentComponent from "@/components/page/posts/post-content";

import { PostData, getPostData, getPostsFiles } from "@/helpers/posts-util";

interface ContextParams extends ParsedUrlQuery {
  slug: string;
}

interface PostDetailPageProps {
  post: PostData;
}

function PostDetailPage(props: PostDetailPageProps) {
  const { post } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Post Detail</title>
        <meta name="description" content="Post Detail" />
      </Head>

      <PostContentComponent post={post} />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextParams;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles()
    .map((e) => e.replace(/\.md$/, ""))
    .map((e) => ({ params: { slug: e } }));

  return {
    paths: postFilenames,
    fallback: false,
  };
};

export default PostDetailPage;
