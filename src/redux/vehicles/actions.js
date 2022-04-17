import {
  GET_ALL_VEHICLES,
  GET_ALL_VEHICLES_SUCCES,
  VEHICLE_DETAIL,
  BOOK_VEHICLE,
  ESTIMATE_VEHICLE,
} from './constants';

export const getAllVehicles = () => {
  return { type: GET_ALL_VEHICLES };
};
export const getAllVehiclesSuccess = (data) => ({
  type: GET_ALL_VEHICLES_SUCCES,
  payload: data,
});

export const getVehicleDetail = (data) => ({
  type: VEHICLE_DETAIL,
  payload: data,
});

export const bookVehicle = (data) => ({
  type: BOOK_VEHICLE,
  payload: data,
});

export const estimateVehicle = (data) => ({
  type: ESTIMATE_VEHICLE,
  payload: data,
});
