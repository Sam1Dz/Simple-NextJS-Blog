/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  let nextConfig = {
    reactStrictMode: true,
  };

  // DEVELOPMENT CONFIG
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig["env"] = {
      db_user: "LearningBlog",
      db_password: "7oLY4eQj1vbDZiPs",
      db_cluster: "learningcluster",
      db_name: "nextjs-blog",
    };
  }

  // PRODUCTION CONFIG
  nextConfig["env"] = {
    db_user: "LearningBlog",
    db_password: "7oLY4eQj1vbDZiPs",
    db_cluster: "learningcluster",
    db_name: "nextjs-blog",
  };

  return nextConfig;
};
