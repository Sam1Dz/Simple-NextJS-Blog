/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PostGridComponentUi from "@/components/ui/posts/post-grid";

import type { PostData } from "@/helpers/posts-util";

interface FeaturedPostComponentProps {
  data: PostData[];
}

function FeaturedPostComponent(props: FeaturedPostComponentProps) {
  const { data } = props;

  return (
    <Box component="section" sx={{ mx: 4, my: 4 }}>
      <Typography variant="h4" component="h2" align="center">
        FEATURED POSTS
      </Typography>
      <PostGridComponentUi posts={data} />
    </Box>
  );
}

export default FeaturedPostComponent;
