import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LinkWrapper = styled("div")(
  () => `
  a{
    opacity: 0.5;
    transition: all 0.2s ease;
  }
  a:hover{
    opacity: 0.75
  }
`
);

export const PositionSmallCard = () => {
  return (
    <Box>
      <Link to="/">
        <Typography variant="h5">Fullstack Developer</Typography>
        <Typography variant="subtitle2">from 3000 to 4000 EUR</Typography>
      </Link>
      <LinkWrapper>
        <Link to="/">Oracle corp.</Link>
      </LinkWrapper>
    </Box>
  );
};
