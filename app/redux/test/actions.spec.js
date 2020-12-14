// Actions
import { getArtists, getTracks } from '../actions';

// constants
import {
  GET_ARTISTS,
  GET_TRACKS,
} from '../constants';

/**
 * @author Camilo Sáenz
 * @file actions.spec.js
 * @description Unit test to app
 * */

describe('App actions', () => {
  it('has a type of GET_ARTISTS', () => {
    const expected = { type: GET_ARTISTS, payload: { fm: 1 }, cb: 1 };
    expect(getArtists(1, 1)).toEqual(expected);
  });

  it('has a type of GET_GREET_FILTER', () => {
    const expected = { type: GET_TRACKS, payload: { track: 1 }, cb: 1 };
    expect(getTracks(1, 1)).toEqual(expected);
  });
});
