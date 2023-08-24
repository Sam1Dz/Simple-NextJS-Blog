/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PostHeaderComponentUI from "@/components/ui/posts/post-header";

import type { PostData } from "@/helpers/posts-util";

interface PostContentComponentProps {
  post: PostData;
}

function PostContentComponent(props: PostContentComponentProps) {
  const { date, image, slug, title } = props.post;
  const imageUrl = `/images/posts/${slug}/${image}`;

  return (
    <Box component="article">
      <PostHeaderComponentUI title={title} date={date} image={imageUrl} />

      <Container maxWidth="md">
        <h1>Post Detail Page</h1>
      </Container>
    </Box>
  );
}

export default PostContentComponent;
