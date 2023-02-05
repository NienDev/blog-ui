import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Blog from "./Blog";
import Image from "next/image";
import useSWR, { Key, Fetcher } from "swr";
import { Post } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

const StyledBackgroundImage = styled(Image)`
  position: absolute;
  width: 400px;
  height: 500px;
  z-index: -1;
  right: -4em;
`;

const StyledFeaturedBlog = styled.div`
  text-align: center;
  position: relative;
`;

export default function FeaturedBlog() {
  SwiperCore.use([Autoplay]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/trending",
    fetcher
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  const { Trending } = data;

  return (
    <StyledFeaturedBlog>
      <StyledBackgroundImage
        src="/images/banner.png"
        width={400}
        height={500}
        alt="background image"
        priority
      />
      <Typography variant="h4" fontWeight="bold" gutterBottom marginTop={2}>
        Trending
      </Typography>
      <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} speed={2000}>
        {Trending.map((post: Post) => (
          <SwiperSlide key={post.id}>
            <Blog key={post.id} {...post} type="featured" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledFeaturedBlog>
  );
}
