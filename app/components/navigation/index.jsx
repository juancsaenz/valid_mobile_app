// Dependecies
import React from 'react';
// import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Style
import colors from '../../utils/theme/colors'

// App routes
import stackRoutes from './routes';

/**
 * @file index.jsx
 * @author Camilo Sáenz
 * @description App navigation file.
 */

// Define Navigator configuration
const Stack = createStackNavigator();

const Navigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        {stackRoutes.map((route) => (<Stack.Screen key={route.name} {...route} />))}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

/**
 * Component definition of proptypes.
 */
Navigation.propTypes = { };

export default Navigation;
