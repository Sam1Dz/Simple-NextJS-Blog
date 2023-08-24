import Link from "next/link";
import Image from "next/image";

/* MATERIAL UI | COMPONENTS */
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { convertDateToReadableDate } from "@/helpers/date-conversion";

import type { PostData } from "@/helpers/posts-util";

interface PostItemGridComponentUiProps {
  posts: PostData;
}

function PostItemGridComponentUi(props: PostItemGridComponentUiProps) {
  const { slug, title, image, excerpt, date } = props.posts;
  const formattedDate = convertDateToReadableDate(date);

  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea sx={{ flexDirection: "column" }}>
        <Link href={`/posts/${slug}`}>
          <CardMedia
            sx={{ position: "relative", height: { xs: 200, md: 250 } }}
          >
            <Image
              style={{ objectFit: "cover" }}
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
              {formattedDate}
            </Typography>
            <Typography paragraph>{excerpt}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default PostItemGridComponentUi;
