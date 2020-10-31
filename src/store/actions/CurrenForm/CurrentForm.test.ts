import GeneralInformation from 'models/GeneralInformation.interface';
import {setGeneralInformation, setSelectedConditions} from '.';
import {SET_GENERAL_INFORMATION, SET_SELECTED_CONDITIONS} from '../actionTypes';

describe('Current Form Actions', () => {
  it('setGeneralInformation action', () => {
    const expectedInfo: GeneralInformation = {
      firstName: 'name',
      lastName: 'last',
      gender: 'gender',
      address: 'address',
      city: 'city',
      date: 'date',
      email: 'email',
      maritalStatus: 'status',
      phone: 'phone',
      state: 'state',
      zip: 'zip',
    };

    const action = setGeneralInformation(expectedInfo);
    expect(action).toEqual({
      type: SET_GENERAL_INFORMATION,
      payload: expectedInfo,
    });
  });

  it('setSelectedConditions action', () => {
    const expectedConditions = [
      {
        conditionType: 'gastrointestinal',
        condition: 'IBS',
      },
      {
        condition: "Crohn's Disease",
      },
      {
        conditionType: 'gastrointestinal',
        condition: 'Gallstones',
      },
    ];

    const action = setSelectedConditions(expectedConditions);
    expect(action).toEqual({
      type: SET_SELECTED_CONDITIONS,
      payload: expectedConditions,
    });
  });
});
