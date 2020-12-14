/* eslint-disable import/extensions */
// Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
/**
 * @file setup.js
 * @author Camilo Sáenz.
 * @description Testing configuration for jest.
 */

Enzyme.configure({ adapter: new Adapter() });

// Mocks
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
