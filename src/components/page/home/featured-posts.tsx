import { Typography } from "@mui/material";

import PostGridComponentUi from "@/components/ui/posts/post-grid";

import styles from "@/styles/featured-posts.module.css";
import { Post } from "@/types";

interface FeaturedPostComponentProps {
  data: Post[];
}

function FeaturedPostComponent(props: FeaturedPostComponentProps) {
  const { data } = props;

  console.log("data?", data);

  return (
    <section className={styles.section}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        FEATURED POSTS
      </Typography>
      <PostGridComponentUi posts={data} />
    </section>
  );
}

export default FeaturedPostComponent;
