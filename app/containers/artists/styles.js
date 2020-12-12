// Dependencies
import { StyleSheet } from 'react-native';

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
  container: {
    flex: 1,
  },
  hide: {
    display: 'none',
  },
  separator: {
    height: 20,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default styles;
