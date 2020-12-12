// Constants
import { GET_ARTISTS, GET_TRACKS } from './constants';
  
import { apiGetArtists, apiGetTracks } from '../lib/api';

/**
 * @file actions.js
 * @author Camilo Saenz
 * @description Application actions.
 */

export const getArtists = (fm, cb) => (
  { type: GET_ARTISTS, payload: { fm }, cb }
);

export const getTracks = (track, cb) => (
  { type: GET_TRACKS, payload: { track }, cb }
);

export const fetchGetArtists = (page, cb) => {
  return (dispatch) => {
    apiGetArtists(page)
      .then(res => {
        dispatch(getArtists(res, cb));
      })
      .catch(res => {
        console.log(res);
      });
  };
};

export const fetchGetTracks = (page, cb) => {
  return (dispatch) => {
    apiGetTracks(page)
      .then(res => {
        dispatch(getTracks(res, cb));
      })
      .catch(res => {
        console.log(res);
      });
  };
};
