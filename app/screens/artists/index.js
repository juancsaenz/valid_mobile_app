// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Redux Actions
import * as actions from '../../redux/actions';

// View
import View from './view';

/**
 * @file index.js
 * @author Camilo Sáenz
 * @description Initialize Artists View.
 */

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = () => ({ });

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
