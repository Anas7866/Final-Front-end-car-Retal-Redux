import {
  ADD_USER,
  LOGIN_USER,
  LOGIN_USER_DATA,
  RESET_PASSWORD,
  LOGOUT,
  ADD_REVIEW,
  REVIEW_LISTING,
  REVIEW_LISTING_SUCCESS,
} from './constants';

export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const handleLoginUserData = (data) => ({
  type: LOGIN_USER_DATA,
  payload: data,
});

export const handleResetPassword = (data) => ({
  type: RESET_PASSWORD,
  payload: data,
});

export const handleLogout = () => ({
  type: LOGOUT,
});

export const handleAddReview = (data) => ({
  type: ADD_REVIEW,
  payload: data,
});

export const handleReviewListing = () => ({
  type: REVIEW_LISTING,
});

export const handleReviewListingSuccess = (data) => ({
  type: REVIEW_LISTING_SUCCESS,
  payload: data,
});
