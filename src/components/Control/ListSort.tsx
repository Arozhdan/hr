import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { SortTypes } from "../../models/global.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { searchSlice } from "../../store/search/SearchSlice";

export const ListSort = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const value = useAppSelector((state) => state.searchReducer.sort);
  const dispatch = useAppDispatch();

  const handleClose = (value?: SortTypes) => {
    setAnchor(null);
    if (value) {
      dispatch(searchSlice.actions.setSortType(value));
    }
  };

  return (
    <Box py={1}>
      <Typography
        style={{ cursor: "pointer" }}
        variant="subtitle1"
        color="secondary"
        onClick={handleClick}
      >
        Sort by:
        <Typography ml={1} variant="overline">
          {value}
        </Typography>
      </Typography>
      <Menu
        defaultValue={value}
        variant="menu"
        anchorEl={anchor}
        open={open}
        onClose={() => handleClose()}
      >
        <MenuItem dense onClick={() => handleClose(SortTypes.RECENT)}>
          {SortTypes.RECENT}
        </MenuItem>
        <MenuItem dense onClick={() => handleClose(SortTypes.SALARY_ASC)}>
          {SortTypes.SALARY_ASC}
        </MenuItem>
        <MenuItem dense onClick={() => handleClose(SortTypes.SALARY_DESC)}>
          {SortTypes.SALARY_DESC}
        </MenuItem>
      </Menu>
    </Box>
  );
};
