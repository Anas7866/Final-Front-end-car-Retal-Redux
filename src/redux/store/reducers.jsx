import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Users from '../users/reducers';
import VehicleReducer from '../vehicles/reducers';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: Users,
    vehicleReducer: VehicleReducer,
  });

export default rootReducer;
