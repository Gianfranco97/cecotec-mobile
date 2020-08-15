import React from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AppNavigator from './src/navigation';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
