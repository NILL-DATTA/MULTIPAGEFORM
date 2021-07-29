import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { setSliceData } from '../Slice/Slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    setData:setSliceData
  },
});
