import Blog from "@/components/Blog";
import { Post } from "@/types";
import styled from "@emotion/styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import data from "../api/data";
export default function FeaturedPost(props: {
  post: Post[];
  relatedPosts: Post[];
}) {
  const realPost = props.post[0];
  const StyledFeaturedPost = styled(Box)`
    hr {
      width: 500px;
    }
  `;
  return (
    <StyledFeaturedPost
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
        isReverse={true}
        showDescription
      />
      <hr />
      <Typography variant="h5" fontWeight="bold" marginBottom={4} marginTop={4}>
        Related
      </Typography>
      <Grid container justifyContent="center" gap={4}>
        {props.relatedPosts.map((post) => (
          <Grid key={post.id} item>
            <Blog key={post.id} {...post} type="card" />
          </Grid>
        ))}
      </Grid>
    </StyledFeaturedPost>
  );
}

function getIds() {
  const { Trending } = data;
  return Trending.map((post) => ({
    params: {
      featuredId: post.id.toString(),
    },
  }));
}

function getFeaturedPost(id: number) {
  const { Trending } = data;
  return Trending.filter((post) => post.id == id);
}

function getRelatedPosts(category: string) {
  const { Trending } = data;
  return Trending.filter((post) => post.category == category);
}

export async function getStaticProps(context: any) {
  const { featuredId } = context.params;
  const featuredPost = getFeaturedPost(featuredId);
  const relatedPosts = getRelatedPosts(featuredPost[0].category);
  return {
    props: {
      post: featuredPost,
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
