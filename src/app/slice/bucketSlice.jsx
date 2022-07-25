import { createSlice } from "@reduxjs/toolkit";

const CREATE = "week3_assignment/bucket/CREATE"
const READ = "week3_assignment/bucket/READ"

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [],
  reducers: {
    CREATE: (state, action) => {
      state.push(action.payload);
    },
    READ: (state, action) => state
  }
})

export default bucketSlice;