import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  data: ""
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataReducer: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const getDataAction = createAction("GET_DATA_ACTION_TYPE");
export const { dataReducer } = dataSlice.actions;
export default dataSlice.reducer;
