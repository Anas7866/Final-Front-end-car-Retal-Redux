import produce from 'immer';

import { LOGIN_USER_DATA, LOGOUT, REVIEW_LISTING_SUCCESS } from './constants';
const initialState = {
  userDetail: {},
  reviews: {},
};

const Users = produce((state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_DATA:
      state.userDetail = action.payload;
      break;
    case LOGOUT:
      state.userDetail = {};
      break;

    case REVIEW_LISTING_SUCCESS:
      state.reviews = action.payload;
      break;

    default:
  }
}, initialState);

export default Users;
