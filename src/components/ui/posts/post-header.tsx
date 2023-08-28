import Image from "next/image";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { convertDateToReadableDate } from "@/helpers/date-conversion";

interface PostHeaderComponentUiProps {
  title: string;
  date: string;
  image: string;
}

function PostHeaderComponentUI(props: PostHeaderComponentUiProps) {
  const { title, date, image } = props;
  const formattedDate = convertDateToReadableDate(date);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: { md: "300px", xs: "400px" },
        overflow: "hidden",
        mb: 4,
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
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column-reverse" },
              textAlign: { md: "left", xs: "center" },
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h4" component="h1">
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
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-around",
                m: 2,
              }}
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

export default PostHeaderComponentUI;
