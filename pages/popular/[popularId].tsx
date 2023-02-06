import Blog from "@/components/Blog";
import { Post } from "@/types";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import data from "../api/data";

export default function PopularPost(props: {
  post: Post;
  relatedPosts: Post[];
}) {
  const StyledFeaturedPost = styled(Box)`
    hr {
      width: 500px;
    }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <Blog
        key={props.post.id}
        {...props.post}
        type="popular"
        showDescription
        isReverse
      />
      <hr />
      <Typography variant="h5" fontWeight="bold" marginBottom={4} marginTop={4}>
        Related
      </Typography>
      <Grid container justifyContent="center" gap={4}>
        {props?.relatedPosts.map((post: Post) => (
          <Grid key={post.id} item>
            <Blog key={post.id} {...post} type="card" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function getPost(id: number) {
  const { Popular } = data;
  return Popular.filter((post) => post.id == id);
}

function getIds() {
  const { Popular } = data;
  return Popular.map((post) => ({
    params: {
      popularId: post.id.toString(),
    },
  }));
}

function getRelatedPosts(category: string) {
  const { Popular } = data;
  return Popular.filter((post) => post.category == category);
}

export async function getStaticProps(context: any) {
  const { popularId } = context.params;
  const posts = getPost(popularId);
  const relatedPosts = getRelatedPosts(posts[0].category);
  return {
    props: {
      post: posts[0],
      relatedPosts,
    },
  };
}

export async function getStaticPaths() {
  const validIds = getIds();
  return {
    paths: validIds,
    fallback: false,
  };
}
