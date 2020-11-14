import Action from 'models/Action.interface';
import Condition from 'models/Condition.interface';
import State from 'models/State.interface';
import {Dispatch} from 'redux';
import GeneralInformation from '../../../models/GeneralInformation.interface';
import {SET_GENERAL_INFORMATION, SET_SELECTED_CONDITIONS} from '../actionTypes';
import {storeObjectData, getObjectData} from 'services/Storage';

export const setGeneralInformation = (payload: GeneralInformation): Action => {
  console.log(payload);
  return {
    type: SET_GENERAL_INFORMATION,
    payload,
  };
};

export const setSelectedConditions = (payload: Condition[]): Action => ({
  type: SET_SELECTED_CONDITIONS,
  payload,
});

export const saveFormInStorage = () => async (
  dispatch: Dispatch,
  getState: () => State,
) => {
  try {
    const currentForm = getState().currentForm;
    await storeObjectData('currentForm', currentForm);
  } catch (error) {
    console.error(error);
  }
};

export const retrieveDataFromStorage = () => async (dispatch: Dispatch) => {
  try {
    const data = await getObjectData('currentForm');
    if (data) {
      const {generalInformation, selectedConditions} = data;
      dispatch(setGeneralInformation(generalInformation));
      dispatch(setSelectedConditions(selectedConditions));
    }
  } catch (error) {
    console.error(error);
  }
};
