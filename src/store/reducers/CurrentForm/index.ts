import Condition from 'models/Condition.interface';
import Action from '../../../models/Action.interface';
import CurrentFormState from '../../../models/CurrentFormState.interface';
import GeneralInformation from '../../../models/GeneralInformation.interface';
import {
  SET_GENERAL_INFORMATION,
  SET_SELECTED_CONDITIONS,
} from '../../actions/actionTypes';

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
  selectedConditions: [],
};

export default function (
  state = initialState,
  {type, payload}: Action = {type: ''},
): CurrentFormState {
  switch (type) {
    case SET_GENERAL_INFORMATION:
      return {...state, generalInformation: payload as GeneralInformation};

    case SET_SELECTED_CONDITIONS:
      return {...state, selectedConditions: payload as Condition[]};

    default:
      return state;
  }
}
