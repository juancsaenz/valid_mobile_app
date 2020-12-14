// Constants
import { GET_ARTISTS, GET_TRACKS } from './constants';

export const initialState = { fm: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return { ...state, fm: action.payload };
    case GET_TRACKS:
      return { ...state, track: action.payload };
    default:
      return { ...state };
  }
};
