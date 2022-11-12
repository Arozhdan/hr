import React from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box component="nav">
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="8px 0"
        >
          <Box display="flex">
            <Button color="secondary" disabled>
              Job seekers
            </Button>
            <Button color="secondary">Employers</Button>
          </Box>
          <Box display="flex" columnGap="14px">
            <Button color="info" size="small">
              Request resume
            </Button>
            <Button color="info" size="small">
              Interview rehearsal
            </Button>
            <Button color="info" size="small" endIcon={<MenuOutlined />}>
              Other Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
