// Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { View } from 'react-native';

// Components
import AppNavigation from './components/navigation';

// Redux Store
import store from './redux/store';

/**
 * @file App.jsx
 * @author Camilo Sáenz
 * @description Application root component.
 */

/**
 * App root component.
 * @returns { object } The component to render.
 */
function App() {
  return (
    <Provider store={store}>
      <Root>
        <View style={{ flex: 1 }}>
          <AppNavigation />
        </View>
      </Root>
    </Provider>
  );
}

export default App;
