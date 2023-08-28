import React from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
// import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
// import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import PostHeaderComponentUI from "@/components/ui/posts/post-header";

import useResponsive from "@/helpers/hooks/use-responsive";

import type { PostData } from "@/helpers/posts-util";

interface PostContentComponentProps {
  post: PostData;
}

function PostContentComponent(props: PostContentComponentProps) {
  const { width, isScreenHeightUnder600, isScreenWidthUnder600 } =
    useResponsive();

  const { content, date, image, slug, title } = props.post;
  const imageUrl = `/images/posts/${slug}`;

  return (
    <React.Fragment>
      <PostHeaderComponentUI
        title={title}
        date={date}
        image={`${imageUrl}/${image}`}
      />

      <Container component="article" maxWidth="md">
        <ReactMarkdown
          components={{
            img(img) {
              return (
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    my: 2,
                    mx: "auto",
                    maxWidth: "600px",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={`${imageUrl}/${img.src ?? ""}`}
                    alt={img.alt ?? ""}
                    width={
                      width < 300
                        ? 250
                        : isScreenHeightUnder600 || isScreenWidthUnder600
                        ? 300
                        : 600
                    }
                    height={0}
                  />
                </Box>
              );
            },
            p(p) {
              const { node, children } = p;

              if (node.children[0].type !== "text") {
                return <div>{children}</div>;
              }

              return (
                <Typography component="p" variant="body1" sx={{ my: 3 }}>
                  {children}
                </Typography>
              );
            },
            h2(hTwo) {
              const { children } = hTwo;

              return (
                <Typography component="h2" variant="h4" sx={{ mb: 2, mt: 4 }}>
                  {children}
                </Typography>
              );
            },
            code(code) {
              const { className, children } = code;
              const language = className?.split("-")[1];

              const stringCode = children[0]?.toString() ?? "";

              return (
                <SyntaxHighlighter
                  wrapLongLines
                  style={materialDark}
                  language={language}
                >
                  {stringCode}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </Container>
    </React.Fragment>
  );
}

export default PostContentComponent;
