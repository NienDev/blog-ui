import { Typography, Stack, Grid } from "@mui/material";
import React, { useState } from "react";
import Blog from "./Blog";
import useSWR from "swr";
import { Post } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowDimensions from "@/hooks";

const PopularPosts = () => {
  const window = useWindowDimensions();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/popular",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const Popular = data;

  const slidesNum: number = window.width < 1200 ? Number(1) : Number(2);
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        marginTop={8}
        textAlign="center"
      >
        Most Popular
      </Typography>
      <Grid container>
        <Swiper slidesPerView={slidesNum} grabCursor={true}>
          {Popular.map((post: Post) => (
            <SwiperSlide key={post.id}>
              <Blog key={post.id} {...post} type="popular" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
};

export default PopularPosts;
