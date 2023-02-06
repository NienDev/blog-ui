import Image from "next/image";
import { Box, Typography } from "@mui/material";
import tempImg from "../public/temp.jpg";
import styled from "@emotion/styled";
import Link from "next/link";

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
  isReverse?: boolean;
  showDescription?: boolean;
}

const StyledImage = styled(Image)`
  background-color: #ddd;
`;

const StyledBlog = styled.div`
  .latest {
    width: 300px !important;
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
    gap: 1em;
  }
  .description {
    text-align: left;
    /* flex: 1; */
  }
  .description.card {
    max-width: 300px !important;
  }
  .container.latest {
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
    width: 100% !important;
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
    gap: 1em;
  }
  .latest.container {
    flex-direction: column;
    gap: 1em;
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
    .container {
      justify-content: center;
    }
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

  .reverse {
    flex-direction: column-reverse !important;
  }
  .description {
    display: flex;
    flex-direction: column;
  }
  .description.reverse {
    flex-direction: column-reverse !important;
  }
  #description {
    width: 500px;
  }
`;

const StyledUserImage = styled(Image)`
  background-color: #ddd;
  border-radius: 50%;
`;

function Blog(props: BlogProps) {
  return (
    <StyledBlog className={`${props.type}`}>
      <Box
        className={`container ${props.type} ${props.isReverse && "reverse"}
      `}
      >
        <StyledImage
          src={props.img}
          width={300}
          height={300}
          alt="featured blog image"
          className={`thumbnail ${props.type}`}
          priority
        />
        <Box
          className={`description ${props.isReverse && "reverse"} ${
            props.type
          }`}
        >
          <div>
            <Typography id="card-detail">
              <span className="category">{props.category}</span> -{" "}
              {props.published}
            </Typography>
            <Link
              href={`/${props.type == "card" ? "latest" : props.type}/${
                props.id
              }`}
            >
              <Typography
                variant={`${
                  props.type == "card"
                    ? "h6"
                    : props.type == "popular"
                    ? "h5"
                    : "h5"
                }`}
                fontWeight="bold"
                gutterBottom
                id="title"
              >
                {props.title}
              </Typography>
            </Link>
            <Typography id="card-body" marginBottom={2}>
              {props.subtitle}
            </Typography>
          </div>
          <Box sx={{ display: "flex", width: "100%", gap: "1em" }}>
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
      {props.showDescription && (
        <Typography variant="body1" id="description" marginTop={2}>
          {props.description}
        </Typography>
      )}
    </StyledBlog>
  );
}

export default Blog;
