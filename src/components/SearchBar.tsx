import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import { SearchOutlined, TuneOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { SearchTypes } from "../models/global.interface";
import { searchSlice } from "../store/search/SearchSlice";

interface Props {
  autoFocus?: boolean;
}
interface LinkProps {
  active?: boolean;
  color?: string;
}
const StyledLink = styled(Link)<LinkProps>(
  ({ active, ...props }) => `
  display: inline-block;
  padding: 8px;
  margin-top: 8px;
  margin-right: 4px;
  text-transform: capitalize;
  border-bottom: 2px solid ${active ? props.color : "transparent"}
`
);

const labels: Record<SearchTypes, string> = {
  [SearchTypes.COMPANIES]: "",
  [SearchTypes.POSITIONS]: "Position, company or profession",
  [SearchTypes.RESUMES]: "Search by resume and skills",
};

export const SearchBar = ({ autoFocus = false }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();
  const dispatch = useAppDispatch();

  const [placeholder, setPlaceholder] = useState<string>(labels.positions);
  useEffect(() => {
    if (location.pathname.includes("positions"))
      return setPlaceholder(labels.positions);
    if (location.pathname.includes("resumes"))
      return setPlaceholder(labels.resumes);
    if (location.pathname.includes("companies"))
      return setPlaceholder(labels.companies);
    return setPlaceholder("");
  }, [location, setPlaceholder]);

  const [search, setSearch] = useState<string>("");
  const handleSearch = () => {
    dispatch(searchSlice.actions.setSearchValue(search));
  };

  return (
    <>
      <Box py="16px">
        <Box display="flex" alignItems="center">
          <TextField
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            label={placeholder}
            autoFocus={autoFocus}
            fullWidth
            color="info"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <TuneOutlined />
                  </IconButton>
                  <IconButton onClick={handleSearch}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display="flex">
          <StyledLink
            color={colors.greenAccent["600"]}
            to="/positions"
            active={location.pathname === "/positions"}
          >
            Positions
          </StyledLink>
          <StyledLink
            color={colors.greenAccent["600"]}
            to="/resumes"
            active={location.pathname === "/resumes"}
          >
            Resumes
          </StyledLink>
          <StyledLink
            color={colors.greenAccent["600"]}
            to="/companies"
            active={location.pathname === "/companies"}
          >
            Companies
          </StyledLink>
        </Box>
      </Box>
    </>
  );
};
