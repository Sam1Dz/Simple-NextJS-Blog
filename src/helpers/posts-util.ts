import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/assets/content/posts");

type Post = {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
};
export type PostData = Post & {
  slug: string;
  content: string;
};

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileName: string) {
  const postSlug = fileName.replace(/\.md$/, ""); // Removes file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);
  const metadata: Post = {
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
  };

  const postData = {
    slug: postSlug,
    content,
    ...metadata,
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
      a.date > b.date ? -1 : 1;
    });

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((e) => e.isFeatured);

  return featuredPosts;
}
