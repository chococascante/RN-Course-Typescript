import Action from '../../../models/Action.interface';
import CurrentFormState from '../../../models/CurrentFormState.interface';
import GeneralInformation from '../../../models/GeneralInformation.interface';
import {SET_GENERAL_INFORMATION} from '../../actions/actionTypes';

const initialState: CurrentFormState = {
  generalInformation: {
    firstName: '',
    lastName: '',
    gender: '',
    date: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    maritalStatus: '',
  },
};

export default (state = initialState, {type, payload}: Action) => {
  switch (type) {
    case SET_GENERAL_INFORMATION:
      return {...state, generalInformation: payload as GeneralInformation};

    default:
      return state;
  }
};
