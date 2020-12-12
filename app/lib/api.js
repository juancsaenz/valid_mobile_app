const BASEURL = 'http://ws.audioscrobbler.com/2.0/';
const apiKey = '829751643419a7128b7ada50de590067';

export const apiGetArtists = (page) => {
  const url = `${BASEURL }?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json&page=${page}` ;

  return fetch(url)
    .then(response => response.json());
};

export const apiGetTracks = (page) => {
  const url = `${BASEURL }?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json&page=${page}` ;

  return fetch(url)
    .then(response => response.json());
};
