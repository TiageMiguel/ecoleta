import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

import Details from '~/pages/details';
import Home from '~/pages/home';
import Points from '~/pages/points';
import { Theme } from '~/styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
      initialRouteName="home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        cardStyle: {
          backgroundColor: Theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="points" component={Points} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
