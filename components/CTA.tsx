import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
const StyledCTA = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 4em;

  input {
    width: 80%;
    margin: 0 auto;
    padding: 1em;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 1em;
  }

  input:focus {
    outline: none;
  }
`;

const CTA = () => {
  return (
    <StyledCTA>
      <Typography fontWeight="bold" variant="h4" gutterBottom>
        Subscribe Newslatter
      </Typography>
      <input type="email" placeholder="Enter Your Email" required />
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          margin: "0 auto",
          padding: "1em 6em",
          borderRadius: "24px",
        }}
      >
        Subscribe
      </Button>
    </StyledCTA>
  );
};

export default CTA;
