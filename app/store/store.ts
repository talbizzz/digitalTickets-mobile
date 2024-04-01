import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices/AppSlice';

export default configureStore({
  reducer: {
    appSlice: appSlice,
  },
});
