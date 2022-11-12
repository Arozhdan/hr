import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchTypes, SortTypes } from "../../models/global.interface";

interface SearchState {
  searchValue: string | null;
  searchType: SearchTypes;
  autoComplete: string[];
  sort: SortTypes;
}

const initialState: SearchState = {
  searchValue: null,
  searchType: SearchTypes.POSITIONS,
  autoComplete: [],
  sort: SortTypes.RECENT,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSearchType(state, action: PayloadAction<SearchTypes>) {
      state.searchType = action.payload;
    },
    setSortType(state, action: PayloadAction<SortTypes>) {
      state.sort = action.payload;
    },
  },
});
export const searchReducer = searchSlice.reducer;
