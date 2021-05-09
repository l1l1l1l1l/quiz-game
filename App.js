import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartGame from './components/StartGame';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="QuizGame" component={StartGame} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
