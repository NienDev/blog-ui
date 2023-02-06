import Blog from "@/components/Blog";
import { Post } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import data from "../api/data";
import styled from "@emotion/styled";

export default function LatestPost(props: {
  post: Post;
  relatedPosts: Post[];
}) {
  const realPost = props.post;

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
        key={realPost.id}
        {...realPost}
        type="popular"
        showDescription
        isReverse
      />
      <hr />
      <Typography variant="h5" fontWeight="bold" marginBottom={4} marginTop={4}>
        Related
      </Typography>
      <Grid container justifyContent="center" gap={4}>
        {props?.relatedPosts.map((post) => (
          <Grid key={post.id} item>
            <Blog key={post.id} {...post} type="card" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function getPosts() {
  const { Posts } = data;
  return Posts;
}

function getIds() {
  const posts = getPosts();
  return posts.map((post) => ({
    params: {
      latestId: post.id.toString(),
    },
  }));
}

function getPost(id: number) {
  const posts = getPosts();
  const post = posts.filter((post) => post.id == id);
  return post[0];
}

function getRelatedPosts(category: string) {
  const { Posts } = data;
  return Posts.filter((post) => post.category == category);
}

export async function getStaticProps(context: any) {
  const { latestId } = context.params;
  const post = getPost(latestId);
  const relatedPosts = getRelatedPosts(post.category);
  return {
    props: {
      post,
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
