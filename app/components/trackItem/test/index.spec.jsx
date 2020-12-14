// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// View
import TrackItem from '../index';

/**
 * @file index.spec.jsx
 * @author Camilo Sáenz
 * @description Test file for track item.
 */

describe('TrackItem', () => {
  let component;

  const props = {
    item: {
      artist: {
        mbid: 'cc0b7089-c08d-4c10-b6b0-873582c17fd6',
        name: 'System of a Down',
        url: 'https://www.last.fm/music/System+of+a+Down',
      },
      duration: '208',
      image: [
        {
          '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
          size: 'small',
        },
        {
          '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
          size: 'medium',
        },
        {
          '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
          size: 'large',
        },
        { '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
          size: 'extralarge' },
      ],
      listeners: '1615720',
      mbid: 'd758947d-d667-430b-900d-2abb110f63aa',
      name: 'Chop Suey!',
      streamable: {
        '#text': '0',
        fulltrack: '0',
      },
      url: 'https://www.last.fm/music/System+of+a+Down/_/Chop+Suey%21',
    },
    fromTrack: true,
  };

  beforeEach(() => {
    component = shallow(<TrackItem {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
