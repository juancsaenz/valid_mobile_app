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
    lazy: true,
    label: 'Artists',
    icon: 'musical-notes-outline'
  },
  {
    name: 'tracks',
    component: TracksScreen,
    lazy: true,
    label: 'Tracks',
    icon: 'headset-outline'
  }
];

export default routes;
