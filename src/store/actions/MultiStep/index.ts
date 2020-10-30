import {SET_ACTIVE_STEP} from '../actionTypes';

export const setActiveStep = (payload: number) => ({
  type: SET_ACTIVE_STEP,
  payload,
});
