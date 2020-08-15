import React from 'react';
// import { enableScreens } from 'react-native-screens';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/Products';
import SingleProduct from '../screens/SingleProduct';

const Stack = createStackNavigator();
// enableScreens();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'My Products',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={SingleProduct}
        options={{
          title: 'Lalalalala',
        }}
      />
    </Stack.Navigator>
  );
}

// const IndexApp = createBottomTabNavigator(
//   {
//     ProductsStack: MyStack()
//   },
//   {
//     initialRouteName: 'ProductsStack',
//   },
// )

// const AppNavigator = createAppContainer(IndexApp)

export default MyStack;
