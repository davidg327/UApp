import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles.tsx';

interface ITips {
  item: any;
}

export const Tips: React.FC<ITips> = ({item}) => {
  return (
    <ImageBackground
      source={{uri: item.image}}
      style={styles.imageBlog}
      imageStyle={styles.imageBlog}
    />
  );
};
