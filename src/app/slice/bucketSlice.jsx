import { createSlice } from "@reduxjs/toolkit";

// const CREATE = "week3_assignment/bucket/CREATE"
// const UPDATE = "week3_assignment/bucket/UPDATE"
// const DELETE = "week3_assignment/bucket/DELETE"

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [],
  reducers: {
    CREATE: (state, action) => {
      let newState = [...state]
      newState.push(action.payload);
      newState.sort((a, b) => a.id - b.id);
      return newState;
    },
    UPDATE: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          console.log(state[i].isDone, action.payload.isDone);
          state[i].isDone = action.payload.isDone;
        }
      }
    },
    DELETE: (state, action) => {
      return[...state].filter(prop => {return prop.id !== action.payload.id})
    }
  }
})

export default bucketSlice;