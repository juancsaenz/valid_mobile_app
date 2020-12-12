// Screens
import MainScreen from '../../screens/main'

/**
 * @file routes.js
 * @author Camilo Sáenz
 * @description Application routes definition.
 */

/**
 * Stack screen views.
 * @type { array }
 */
const routes = [
  {
    name: 'main',
    component: MainScreen,
    options: () => ({
      header: () => null,
      animationEnabled: false,
    }),
  },
];

export default routes;
