import { Box, Typography } from "@mui/material";

import PostGridComponentUi from "@/components/ui/posts/post-grid";

import { Post } from "@/types";

interface AllPostsComponentProps {
  data: Post[];
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
