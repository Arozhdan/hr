import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { CallToActionSmall, PositionSmallCard } from "../components";

export const ResumeList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid xs={12} md={4} item>
          <Typography mb={3} variant="h3">
            Newest placements
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} pr={4}>
              <PositionSmallCard />
            </Grid>
            <Grid item xs={12} pr={4}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} pr={4}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} pr={4}>
              <PositionSmallCard />
            </Grid>{" "}
          </Grid>
          <Box pr={4}>
            <Typography mt={4} mb={3} variant="h3">
              Freelance gigs
            </Typography>
            <CallToActionSmall />
          </Box>
        </Grid>
        <Grid xs={12} md={8} item>
          <Typography mb={3} variant="h3">
            Popular today
          </Typography>
          <Grid container mb={4} spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>{" "}
            <Grid item xs={12} md={8} lg={6}>
              <PositionSmallCard />
            </Grid>
          </Grid>
          <Button variant="outlined" color="secondary">
            Show all
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
