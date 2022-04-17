import { all } from "redux-saga/effects";


import usersSaga from "../users/sagas";
import vehiclesSaga from "../vehicles/sagas";

export function* rootSaga() {
  yield all([usersSaga(), vehiclesSaga()]);
}
