// Dependencies
import { StyleSheet } from 'react-native';

// Styles
import colors from '../../utils/theme/colors';

/**
 * @file styles.js
 * @author Camilo Sáenz
 * @description Styles definition for component.
 */

/**
 * Component styles definition object.
 * @type { object }
 */
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  overlay: {
    backgroundColor: colors.overlay,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
});

export default styles;
