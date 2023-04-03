import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/assets/content/posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileName: string) {
  const postSlug = fileName.replace(/\.md$/, ""); // Removes file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  const postData = {
    slug: postSlug,
    metadata: data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles
    .map((e) => {
      return getPostData(e);
    })
    .sort((a, b): any => {
      a.metadata.date > b.metadata.date ? -1 : 1;
    });

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((e) => e.metadata.isFeatured);

  return featuredPosts;
}
