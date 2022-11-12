import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CallToActionSmall = () => {
  return (
    <div>
      <Typography mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi
        assumenda corporis delectus fugit hic iure, nam numquam officia officiis
        perspiciatis quibusdam rem, temporibus vitae voluptatum. Aliquid
        explicabo minima voluptas.
      </Typography>
      <Link to="/">
        <Button variant="outlined" color="info">
          Find
        </Button>
      </Link>
    </div>
  );
};
