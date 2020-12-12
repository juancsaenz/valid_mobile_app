// Dependencies
import { StyleSheet } from 'react-native';

// Theme
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
    margin: 0,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: colors.background,
    borderColor: colors.background,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderBottomWidth: 0,
  },
  contentInfo: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    borderBottomWidth: 0,
    marginHorizontal: 15,
  },
  activityPic: {
    width: 90,
    height: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  itemContentRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPic: {
    width: 46,
    height: 46,
    borderRadius: 33,
    marginRight: 8,
    backgroundColor: colors.quinary2,
  },
  userFullName: {
    color: colors.tertiary,
    fontWeight: 'bold',
  },
  username: {
    color: colors.quinary3,
  },
  time: {
    color: colors.quinary3,
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 3,
    marginBottom: 20,
  },
  contentDescription: {
    flex: 1,
  },
  boxContentDescription: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  description: {
    color: colors.quinary3,
    paddingLeft: 12,
    paddingRight: 10,
  },
  mentionStyle: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;
