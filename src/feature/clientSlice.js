import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("profiles/fetchData", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
});

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    client: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.client = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default clientSlice.reducer;
