import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const reactSlicer = createSlice({
  name: 'slice1',
  initialState,
  reducers: {
    Increment: (state) => {
      state.count += 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
  },
});

export const { Increment, Decrement, Reset } = reactSlicer.actions;

export { reactSlicer };

export default reactSlicer.reducer;
