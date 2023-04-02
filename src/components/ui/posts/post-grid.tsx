import { Grid } from "@mui/material";

import PostItemGridComponentUi from "./post-item";

import { Post } from "@/types";

interface PostGridComponentUiProps {
  posts: Post[];
}

function PostGridComponentUi(props: PostGridComponentUiProps) {
  const { posts } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      sx={{ p: "1rem 2rem 1rem 2rem" }}
    >
      {posts?.map((el) => (
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{
            display: "flex",
          }}
          key={el.slug}
        >
          <PostItemGridComponentUi posts={el} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostGridComponentUi;
