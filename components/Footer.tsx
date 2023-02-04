import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CTA from "./CTA";

const StyledFooter = styled.footer`
  background-color: #ecf9ff;
  padding: 2em 0 0;
  margin-top: 8em;
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <CTA />
      <Typography
        variant="caption"
        color="#9d9d9d"
        textAlign="center"
        component="div"
        marginTop={12}
      >
        <div>
          Copyright @2023 All rights reserved | This template is made by Daily
          Tuition | remake by Tran Dai Nien
        </div>
        <div>Terms & conditions</div>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
