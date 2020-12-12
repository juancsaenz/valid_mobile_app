// Screens
import ArtistsScreen from '../artists';
import TracksScreen from '../tracks';

/**
 * @file routes.js
 * @author Camilo Sáenz
 * @description Application routes definition.
 */

/**
 * Tab bar screen views.
 * @type { object }
 */
const routes = [
  {
    name: 'artists',
    component: ArtistsScreen,
    options: {
      tabBarLabel: 'Artists',
      icon: 'home-outline',
    },
  },
  {
    name: 'tracks',
    component: TracksScreen,
    options: {
      tabBarLabel: 'Tracks',
      icon: 'md-camera-outline',
    },
  },
];

export default routes;
