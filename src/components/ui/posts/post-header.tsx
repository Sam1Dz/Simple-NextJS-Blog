import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

import { convertDateToReadableDate } from "@/helpers/date-conversion";

interface PostHeaderComponentUiProps {
  title: string;
  date: string;
  image: string;
}

function PostHeaderComponentUi(props: PostHeaderComponentUiProps) {
  const { title, date, image } = props;
  const formattedDate = convertDateToReadableDate(date);

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "inherit",
          height: "100%",
          boxShadow: "inset 0 0 2000px rgba(255, 255, 255, 0.5)",
          filter: "blur(100px) brightness(0.25)",
        }}
      >
        <Image
          fill
          src={image}
          alt={title}
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box component="div" sx={{ display: "flex" }}>
            <Box
              component="div"
              display="flex"
              flexWrap="wrap"
              flexDirection="column"
              flexGrow={1}
            >
              <Typography variant="h2" component="h1">
                {title}
              </Typography>
              <Typography
                variant="overline"
                component="time"
                color="text.secondary"
              >
                {formattedDate}
              </Typography>
            </Box>
            <Box
              component="div"
              display="flex"
              flexWrap="wrap"
              alignContent="space-around"
            >
              <Image
                src={image}
                alt={title}
                width={200}
                height={150}
                style={{ objectFit: "cover", width: 200, height: 120 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default PostHeaderComponentUi;
