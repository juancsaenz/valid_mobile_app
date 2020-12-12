// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

// Styles
import styles from './styles';

/**
 * @component TrackItem
 * @author Camilo Sáenz
 * @description Track Item component.
 */

export function TrackItem({ item, fromTrack }) {
  console.log('item :>> ', item);
  const { name, listeners, image } = item;
  return (
    <View style={styles.view}>
      <View style={styles.item}>
        <Text>{name}</Text>
        <Text>{listeners}</Text>
        <Image source={{ uri: image[3]['#text'] }} style={{ width: 40, height: 40 }}/>
      </View>
    </View>
  );
}

/**
 * Component definition of proptypes.
 */
TrackItem.propTypes = {
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
TrackItem.defaultProps = {
  item: {
    name: '',
    image: [],
    listeners: '',
  },
  fromTrack: false,
};

export default TrackItem;
