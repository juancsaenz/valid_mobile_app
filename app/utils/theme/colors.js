/**
 * @file colors.js
 * @author Camilo Sáenz
 * @description Colors for theme.
 */

// Default application theme
const defaultThemeColors = {
  primary: '#3382C8',
  primaryOld: 'rgba(221, 87,104, 1)',
  secondary: '#FFFFFF',
  tertiary: '#A7AFBC',
  danger: '#E02020',
  quaternary: '#4D4D4D',
  quaternary2: '#7F7F7F',
  quinary: '#CCCCCC',
  quinary2: '#F2F5F8',
  quinary3: '#B8BEC8',
  quinary4: '#AEB5C0',
  quinary5: '#F2F5F8',
  quinary6: '#474747',
  quinary7: '#F3F5FA',
  quinary8: '#AFB6C1',
  quinary9: '#FAFAFA',
  overlay: 'rgba(0,0,0,0.3)',
  background: '#FFFFFF',
  backgroundDark: '#000000',
  rating: '#f1c40f',
  empty_background: '#F2F5F8',
  border_color: '#D8D8D8',
  border_color2: '#f3f3f3',
  border_color3: '#F5FCFF88',
  shadowOverlay: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)'],
  shadowInverseOverlay: ['rgba(0,0,0,9)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0)'],
  viewerOverlay: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0)'],
  shadowLightOverlay: [
    'rgba(255,255,255,0)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,1)'
  ],
  cancelOverlay: [
    'rgba(255, 216, 213, 1)',
    'rgba(255,255,255,1)'
  ],
  starOverlay: [
    'rgba(128, 207, 255, 0.9)',
    'rgba(255,255,255,1)'
  ],
  whiteLightOverlay: [
    'rgba(255,255,255,0)',
    'rgba(255,255,255,0.8)',
    'rgba(255,255,255,1)'
  ],
  whiteLightOverlayFull: [
    'rgba(255,255,255,0)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,1)'
  ],
  transparent: 'rgba(0,0,0,0)'
};

export default { ...defaultThemeColors };
