import produce from 'immer';

import { GET_ALL_VEHICLES_SUCCES, VEHICLE_DETAIL } from './constants';

const initialState = {
  vehicles: [],
  vehicle: {},
};

const Users = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VEHICLES_SUCCES:
      state.vehicles = action.payload;
      break;

    case VEHICLE_DETAIL:
      const data = state.vehicles.find(
        (vehicel) => vehicel.id === action.payload
      );
      state.vehicle = data;
      break;

    default:
  }
}, initialState);

export default Users;
