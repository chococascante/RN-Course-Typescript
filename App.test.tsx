import App from './App';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import State from 'models/State.interface';

const mockStore = configureMockStore([thunk]);
const initialState: State = {
  multiStep: {
    activeStep: 0,
  },
  currentForm: {
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
  },
};

describe('App', () => {
  it('should render correctly', () => {
    const store = mockStore(initialState);
    const wrapper: ShallowWrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
