import { toast } from 'react-toastify';
import axios from '../store/axiosConfig';
import { push } from 'connected-react-router';
import { getAllVehiclesSuccess } from './actions';
import { GET_ALL_VEHICLES, BOOK_VEHICLE, ESTIMATE_VEHICLE } from './constants';
import { all, put, fork, takeLatest } from 'redux-saga/effects';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';

function* getAllVehiclesList() {
  try {
    const { data } = yield axios.get(`/show_vehicle`);
    yield put(getAllVehiclesSuccess(data?.successData?.get_users || []));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchGetVehiclesList() {
  yield takeLatest(GET_ALL_VEHICLES, getAllVehiclesList);
}

function* bookVehicle({ payload }) {
  try {
    const { data } = yield axios.post(`/book`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    yield put(push('/'));
    window.location.reload();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchBookVehicle() {
  yield takeLatest(BOOK_VEHICLE, bookVehicle);
}

function* estimateVehicle({ payload }) {
  try {
    const { data } = yield axios.post(`/sell_car`, payload);
    if (data.statusCode !== 200) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    yield put(push('/'));
    window.location.reload();
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchEstimateVehicle() {
  yield takeLatest(ESTIMATE_VEHICLE, estimateVehicle);
}

export default function* vehiclesSaga() {
  yield all([
    fork(watchGetVehiclesList),
    fork(watchBookVehicle),
    fork(watchEstimateVehicle),
  ]);
}
