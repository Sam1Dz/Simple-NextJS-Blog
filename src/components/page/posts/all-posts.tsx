/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PostGridComponentUi from "@/components/ui/posts/post-grid";

import type { PostData } from "@/helpers/posts-util";

interface AllPostsComponentProps {
  data: PostData[];
}

function AllPostsComponent(props: AllPostsComponentProps) {
  const { data } = props;

  return (
    <Box component="section" sx={{ mx: 4, my: 4 }}>
      <Typography variant="h4" component="h1" align="center">
        ALL POSTS
      </Typography>
      <PostGridComponentUi posts={data} />
    </Box>
  );
}

export default AllPostsComponent;
