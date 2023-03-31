import { Typography } from "@mui/material";

import styles from "@/styles/featured-posts.module.css";

function FeaturedPostComponent() {
  return (
    <section className={styles.section}>
      <Typography variant="h4" component="h2" align="center">
        FEATURED POSTS
      </Typography>
    </section>
  );
}

export default FeaturedPostComponent;
