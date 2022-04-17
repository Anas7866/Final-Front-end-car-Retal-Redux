import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { all, put, fork, takeLatest } from 'redux-saga/effects';

import {
  ADD_USER,
  LOGIN_USER,
  RESET_PASSWORD,
  ADD_REVIEW,
  REVIEW_LISTING,
} from './constants';
import { handleLoginUserData, handleReviewListingSuccess } from './actions';
import axios from '../store/axiosConfig';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';

import 'react-toastify/dist/ReactToastify.css';

function* addUserRequest({ payload }) {
  try {
    const { data } = yield axios.post(`/register`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    yield put(push('/login'));
    toast.success(data.message);
    window.location.reload();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchAddUser() {
  yield takeLatest(ADD_USER, addUserRequest);
}

function* loginUserRequest({ payload }) {
  try {
    const { data } = yield axios.post(`/login`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }

    yield put(handleLoginUserData(data));
    yield put(push('/dashboard'));
    window.location.reload();
    toast.success(data.message);
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUserRequest);
}

function* resetpasswordRequest({ payload }) {
  try {
    const { data } = yield axios.post(`/resetPassword`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
  } catch (error) {
    toast.error(error);
    yield sagaErrorHandler(error.response);
  }
}

function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetpasswordRequest);
}

function* addReview({ payload }) {
  try {
    const { data } = yield axios.post(`/add_review`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
  } catch (error) {
    toast.error(error);
    yield sagaErrorHandler(error.response);
  }
}

function* watchAddReview() {
  yield takeLatest(ADD_REVIEW, addReview);
}

function* reviewListing() {
  try {
    const { data } = yield axios.get(`/show_review`);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    yield put(handleReviewListingSuccess(data));
  } catch (error) {
    toast.error(error);
    yield sagaErrorHandler(error.response);
  }
}

function* watchGetReview() {
  yield takeLatest(REVIEW_LISTING, reviewListing);
}

export default function* usersSaga() {
  yield all([
    fork(watchAddUser),
    fork(watchLoginUser),
    fork(watchResetPassword),
    fork(watchAddReview),

    fork(watchGetReview),
  ]);
}
