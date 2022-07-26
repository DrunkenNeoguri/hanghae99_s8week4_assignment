import { createSlice } from "@reduxjs/toolkit";

// const CREATE = "week3_assignment/bucket/CREATE"
// const READ = "week3_assignment/bucket/READ"

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [],
  reducers: {
    CREATE: (state, action) => {
      state.push(action.payload);
    },
    UPDATE: (state, action) => {
      state[action.payload.id].ongoing = action.payload.ongoing;
    },
    DELETE: (state, action) => {
      state = [...state].filter(prop => {return prop.id !== action.payload.id})
      console.log(action.payload.id)
    }
  }
})

export default bucketSlice;