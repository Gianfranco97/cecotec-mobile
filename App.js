import React from 'react';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Toggle,
  Layout,
} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AppNavigator from './src/navigation';

const App = () => {
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={checked ? eva.light : eva.dark}>
        <Layout style={{flex: 1}}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
          <Toggle style={{marginBottom: 36, padding: 20}} checked={checked} onChange={onCheckedChange}>
            {`Mode: ${checked ? 'Light' : 'Dark'}`}
          </Toggle>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

export default App;
