import { configureStore } from '@reduxjs/toolkit';

import slick1Reducer from './Slicer1';

const stores = configureStore({
  reducer: {
    slice1: slick1Reducer,
  },
});

export default stores;
