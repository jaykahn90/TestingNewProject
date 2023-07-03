import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen imports
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/HookEffect';
import Course from './src/screens/Course';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* HomeScreen */}
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <Home
              {...props}
              mainScreenWelcome={'Welcome To'}
              mainScreenTitle={'Testing'}
            />
          )}
        </Stack.Screen>

        {/* CourseScreen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />

        {/* UserData */}
        <Stack.Screen
          name="User Data"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },

            headerTitleAlign: 'center',
          }}
        />

        {/* AboutScreen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },

            headerTitleAlign: 'center',
          }}
        />

        {/* Contact */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },

            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
