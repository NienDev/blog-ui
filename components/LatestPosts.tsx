import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Blog from "./Blog";
import { Post } from "@/types";
import useSWR from "swr";

const LatestPosts = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/posts",
    fetcher
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  const { Posts } = data;

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="Bold"
        textAlign="center"
        marginTop={4}
        gutterBottom
      >
        Latest Posts
      </Typography>
      <Grid container gap={4} rowGap={8} justifyContent="center">
        {Posts.map((post: Post) => (
          <Grid item key={post.id}>
            <Blog key={post.id} {...post} type="latest" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LatestPosts;
