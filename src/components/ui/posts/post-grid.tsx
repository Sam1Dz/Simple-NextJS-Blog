/* MATERIAL UI | COMPONENTS */
import Grid from "@mui/material/Grid";

import PostItemGridComponentUi from "./post-item";

import type { PostData } from "@/helpers/posts-util";

interface PostGridComponentUiProps {
  posts: PostData[];
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
      sx={{ mt: 4 }}
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
