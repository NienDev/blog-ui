import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import Blog from "./Blog";
import useSWR from "swr";
import { Post } from "@/types";

const StyledCategoryPosts = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0em;
  margin-top: 8em;
  column-gap: 4em;
  @media (max-width: 980px) {
    flex-direction: column;
    row-gap: 8em;
  }
`;
const CategoryPosts = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {
    data: businessPosts,
    error,
    isLoading,
  } = useSWR(`http://localhost:3000/api/posts/business`, fetcher);
  const {
    data: travelPosts,
    error: error1,
    isLoading: isLoading1,
  } = useSWR("http://localhost:3000/api/posts/travel", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (isLoading1) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (error1) return <h1>{error1}</h1>;

  return (
    <StyledCategoryPosts>
      <Stack flex={1} gap={4}>
        <Typography fontWeight="bold" variant="h4">
          Business
        </Typography>
        {businessPosts.map((post: Post) => (
          <Blog key={post.id} {...post} type="card" />
        ))}
      </Stack>
      <Stack flex={1} gap={4}>
        <Typography fontWeight="bold" variant="h4">
          Travel
        </Typography>
        {travelPosts.map((post: Post) => (
          <Blog key={post.id} {...post} type="card" />
        ))}
      </Stack>
    </StyledCategoryPosts>
  );
};

export default CategoryPosts;
