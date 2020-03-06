import { createAction, createReducer } from 'redux-act';

/* -------------------- Actions -------------------- */
// this is a dummy action, please rename/delete it.
export const updateHome = createAction('update home page');

/* -------------------- Reducers -------------------- */
// this is a dummy reducer, please rename/delete it.
export const home = {
  [updateHome]: (state, value) => ({
    ...state,
    homeValue: value
  })
};

// this si a dummy initial state, please rename/delete it.
export const homeInitialState = {
  homeValue: ''
};

export default createReducer(home, homeInitialState);
