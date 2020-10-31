import Action from 'models/Action.interface';
import Condition from 'models/Condition.interface';
import GeneralInformation from '../../../models/GeneralInformation.interface';
import {SET_GENERAL_INFORMATION, SET_SELECTED_CONDITIONS} from '../actionTypes';

export const setGeneralInformation = (payload: GeneralInformation): Action => ({
  type: SET_GENERAL_INFORMATION,
  payload,
});

export const setSelectedConditions = (payload: Condition[]): Action => ({
  type: SET_SELECTED_CONDITIONS,
  payload,
});
