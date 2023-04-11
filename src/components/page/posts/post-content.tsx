import { Box, Container } from "@mui/material";

import PostHeaderComponentUi from "@/components/ui/posts/post-header";

import { PostData } from "@/helpers/posts-util";

interface PostContentComponentProps {
  post: PostData;
}

function PostContentComponent(props: PostContentComponentProps) {
  const { date, image, slug, title } = props.post;
  const imageUrl = `/images/posts/${slug}/${image}`;

  return (
    <Box component="article">
      <PostHeaderComponentUi title={title} date={date} image={imageUrl} />

      <Container maxWidth="md">
        <h1>Post Detail Page</h1>
      </Container>
    </Box>
  );
}

export default PostContentComponent;
