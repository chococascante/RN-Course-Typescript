import currentFormReducer from '.';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  setGeneralInformation,
  setSelectedConditions,
} from '../../actions/CurrenForm';
import CurrentFormState from 'models/CurrentFormState.interface';
import GeneralInformation from 'models/GeneralInformation.interface';
import Condition from 'models/Condition.interface';

const initialState: CurrentFormState = {
  generalInformation: {
    firstName: '',
    lastName: '',
    gender: '',
    date: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    maritalStatus: '',
  },
  selectedConditions: [],
};

describe('CurrentFormReducer', () => {
  it('should return initial state', () => {
    const result = currentFormReducer();
    expect(result).toEqual(initialState);
  });

  it('should handle setGeneralInformation', () => {
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

    const result = currentFormReducer(
      initialState,
      setGeneralInformation(expectedInfo),
    );
    expect(result).toEqual({
      ...initialState,
      generalInformation: {...expectedInfo},
    });
  });

  it('should handle setSelectedConditions', () => {
    const expectedConditions: Condition[] = [
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

    const result = currentFormReducer(
      initialState,
      setSelectedConditions(expectedConditions),
    );
    expect(result).toEqual({
      ...initialState,
      selectedConditions: expectedConditions,
    });
  });
});
