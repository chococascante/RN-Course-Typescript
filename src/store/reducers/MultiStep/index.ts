import Action from '../../../models/Action.interface';
import MultiStepState from '../../../models/MultiStepState.inteface';
import {SET_ACTIVE_STEP} from '../../actions/actionTypes';

const initialState: MultiStepState = {
  activeStep: 0,
};

export default (
  state = initialState,
  {type, payload}: Action,
): MultiStepState => {
  switch (type) {
    case SET_ACTIVE_STEP:
      return {...state, activeStep: payload as number};
    default:
      return state;
  }
};
