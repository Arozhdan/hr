import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { CallToActionSmall, ListSort, PositionSmallCard } from "../components";

export const PositionList = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Found 888 positions</Typography>
      <Box display="flex">
        <ListSort />
      </Box>
    </Container>
  );
};
