// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

// Styles
import styles from './styles';

/**
 * @component ArtistItem
 * @author Camilo Sáenz
 * @description Artist Item component.
 */

export function ArtistItem({ item, fromTrack }) {
  console.log('item :>> ', item);
  const { name, listeners, image, duration, artist } = item;
  return (
    <View style={styles.view}>
      <View style={styles.item}>
        <Image source={{ uri: image[3]['#text'] }} style={styles.activityPic}/>
        <View style={styles.contentInfo}>
          <Text style={styles.title}>{`Name: ${name}`}</Text>
          <Text>{`Listeners: ${listeners}`}</Text>
          {fromTrack && <Text>{`Duration: ${duration}`}</Text>}
          {fromTrack && <Text>{`Artist: ${artist.name}`}</Text>}
        </View>
      </View>
    </View>
  );
}

/**
 * Component definition of proptypes.
 */
ArtistItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    listeners: PropTypes.string,
    image: PropTypes.array,
  }),
  fromTrack: PropTypes.bool,
};

/**
 * Component definition of proptypes.
 */
ArtistItem.defaultProps = {
  item: {
    name: '',
    image: [],
    listeners: '',
  },
  fromTrack: false,
};

export default ArtistItem;
