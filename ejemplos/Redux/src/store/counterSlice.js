import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
    name: "ruben",
    age: 33
  },
  reducers: {
    //function
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, incrementByAmount } = slice.actions;
export const selectCount = (state) => state.counter;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 3000);
};

export default slice.reducer;
