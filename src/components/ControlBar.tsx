import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { Link } from "react-router-dom";
import {
  AccountCircleOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  LoginOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { SearchBar } from "./SearchBar";

export const ControlBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Box bgcolor={colors.primary["900"]} py="22px">
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" columnGap="16px">
              <Link to="/">
                <img
                  src="https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019"
                  alt=""
                />
              </Link>
              <Link to="/">Get Help</Link>
              <Link to="/">About This App</Link>
            </Box>
            <Box display="flex" alignItems="center" columnGap="4px">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )}
              </IconButton>

              <Box mx={2}>
                <Button
                  color={isVisible ? "secondary" : "inherit"}
                  startIcon={<SearchOutlined />}
                  onClick={handleClick}
                >
                  Search
                </Button>
              </Box>
              <Box>
                <Button color="inherit" startIcon={<AccountCircleOutlined />}>
                  Create profile
                </Button>
              </Box>
              <Tooltip title="Sign in" arrow placement="right-end">
                <IconButton>
                  <LoginOutlined />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>
      {isVisible && (
        <Container maxWidth="xl">
          <SearchBar autoFocus={true} />
        </Container>
      )}
    </>
  );
};
