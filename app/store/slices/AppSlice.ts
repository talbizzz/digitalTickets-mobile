import {createSelector, createSlice} from '@reduxjs/toolkit';
import {AppStateType, GlobalStateType} from '@digital-tickets-project/types';

const initialState: AppStateType = {
  loggedIn: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const getLoggedIn = createSelector(
  (state: GlobalStateType) => state.appSlice.loggedIn,
  loggedIn => loggedIn === true,
);

export const {setLoggedIn} = appSlice.actions;

export default appSlice.reducer;
