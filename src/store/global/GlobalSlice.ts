import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchTypes } from "../../models/global.interface";

interface GlobalState {
  activeSearchType: SearchTypes;
}

const initialState: GlobalState = {
  activeSearchType: SearchTypes.POSITIONS,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveSearchType(state, action: PayloadAction<SearchTypes>) {
      state.activeSearchType = action.payload;
    },
  },
});
export const globalReducer = globalSlice.reducer;
