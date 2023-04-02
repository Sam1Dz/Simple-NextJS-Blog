import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import styles from "@/styles/post-item.module.css";

import { Post } from "@/types";

interface PostItemGridComponentUiProps {
  posts: Post;
}

function PostItemGridComponentUi(props: PostItemGridComponentUiProps) {
  const { slug, title, image, excerpt } = props.posts;

  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea sx={{ flexDirection: "column" }}>
        <CardMedia sx={{ position: "relative", height: { xs: 200, md: 250 } }}>
          <Image
            className={styles.image}
            src={`/images/posts/${slug}/${image}`}
            alt="Getting Started with NextJS"
            fill
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="h3">
            {title}
          </Typography>
          <Typography
            variant="overline"
            component="time"
            color="text.secondary"
          >
            March 12, 2023
          </Typography>
          <Typography paragraph>{excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostItemGridComponentUi;
