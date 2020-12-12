// Dependencies
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation Routes
import routes from './routes';

// Styles
import styles from './styles';

// Define navigation configuration
const Tab = createBottomTabNavigator();

/**
 * @component MainView
 * @author Camilo Sáenz
 * @description Main screen view.
 */

export function MainView() {
  return (
    <View style={styles.view}>
      <Tab.Navigator>
        {routes.map((r) => (<Tab.Screen key={r.name} options={{
          tabBarLabel: r.label,
          tabBarIcon: ({ color, size }) => (
            <Icon name={r.icon} color={color} size={size} />
          ),
        }}
        {...r} 
        />))}
      </Tab.Navigator>
    </View>
  );
}

export default MainView;
