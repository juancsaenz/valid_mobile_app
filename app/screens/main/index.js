// Dependencies
import { connect } from 'react-redux';

// View
import View from './view';

/**
 * @file index.js
 * @author Camilo Sáenz
 * @description Initialize Main View.
 */

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = () => ({ });

export const mapDispatchToProps = () => ({ });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
