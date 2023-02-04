import Image from "next/image";
import { Box, Typography } from "@mui/material";
import tempImg from "../public/temp.jpg";
import styled from "@emotion/styled";

interface BlogProps {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  img: string;
  author: {
    name: string;
    img: string;
    designation: string;
  };
  published: string;
  category: string;
  type: string; // featured, card, popular
}

const StyledImage = styled(Image)`
  background-color: #ddd;
`;

const StyledBlog = styled.div`
  .latest {
    width: 400px !important;
  }
  .popular {
    width: 500px !important;
  }
  .featured {
    align-items: center;
  }
  .container {
    display: flex;
    /* padding: 0 4em; */
    justify-content: space-between;
    gap: 4em;
  }
  .description {
    text-align: left;
    /* flex: 1; */
  }

  .category {
    color: #f1c540;
    font-weight: bold;
  }

  .container.featured {
    /* gap: 4em; */
  }

  img {
    border-radius: 12px;
  }
  img#userImg {
    border-radius: 50%;
  }

  img.featured {
    width: 450px !important;
    /* width: 100%; */
    height: 400px !important;
  }

  img.latest {
    width: 380px !important;
    height: 250px !important;
  }
  img.popular {
    width: 500px !important;
    height: 350px !important;
  }
  img.card {
    width: 250px !important;
  }
  .card.container {
    flex-direction: row;
    gap: 1em;
  }
  .popular.container {
    flex-direction: column;
    gap: 4em;
  }
  .latest.container {
    flex-direction: column;
    gap: 4em;
  }
  img#userImg {
    height: 60px !important;
    width: 60px !important;
    flex: 0;
  }
  img#userImg.card {
    width: 50px !important;
    height: 50px !important;
  }
  #card-detail,
  #card-body,
  #card-username,
  #card-job {
    font-size: 0.8rem;
  }

  @media (max-width: 980px) {
  }

  @media (max-width: 900px) {
    img.featured {
      max-width: 400px !important;
    }
  }
  @media (max-width: 768px) {
    .container.featured {
      flex-direction: column;
    }
    img.featured {
      width: 100% !important;
      height: 350px !important;
    }
    img.popular {
      width: 100% !important;
    }
    .popular {
      width: 400px !important;
    }
  }

  .cutoff-text {
    --max-lines: 3;
    --line-height: 1.4;
    height: calc(var(--max-lines) * 1em * var(--line-height));
    line-height: var(--line-height);
    overflow: hidden;
    position: relative;
  }
`;

const StyledUserImage = styled(Image)`
  background-color: #ddd;
  border-radius: 50%;
`;

function Blog(props: BlogProps) {
  return (
    <StyledBlog className={`${props.type}`}>
      <Box className={`container ${props.type}`}>
        <StyledImage
          src={props.img}
          width={300}
          height={300}
          alt="featured blog image"
          className={`thumbnail ${props.type}`}
        />
        <Box className="description">
          <Typography id="card-detail">
            <span className="category">{props.category}</span> -{" "}
            {props.published}
          </Typography>
          <Typography
            variant={`${
              props.type == "card"
                ? "h6"
                : props.type == "popular"
                ? "h5"
                : "h4"
            }`}
            fontWeight="bold"
            gutterBottom
            id="title"
          >
            {props.title}
          </Typography>
          <Typography id="card-body" marginBottom={2}>
            {props.subtitle}
          </Typography>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <StyledUserImage
              src={props.author.img}
              width={60}
              height={60}
              alt="user image"
              id="userImg"
              className={`${props.type}`}
            />
            <Box>
              <Typography id="card-username" fontWeight="bold">
                {props.author.name}
              </Typography>
              <Typography id="card-job" color="#b7b7b7">
                {props.author.designation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledBlog>
  );
}

export default Blog;
