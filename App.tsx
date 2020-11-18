/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import configureStore from './src/store/configureStore';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import MainContainer from './src/components/MainContainer';
import GeolocationTest from 'components/GeolocationTest';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainContainer />
      </PaperProvider>
    </Provider>
  );
};

export default App;
