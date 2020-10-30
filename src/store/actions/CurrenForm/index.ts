import GeneralInformation from '../../../models/GeneralInformation.interface';
import {SET_GENERAL_INFORMATION} from '../actionTypes';

export const setGeneralInformation = (payload: GeneralInformation) => ({
  type: SET_GENERAL_INFORMATION,
  payload,
});
