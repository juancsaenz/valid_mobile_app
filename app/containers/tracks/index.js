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
 * @description Initialize Tracks List.
 */

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = (state) => ({ 
  fm: state.fm.track,
});

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = (dispatch) => { 
  return bindActionCreators(actions, dispatch);
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);