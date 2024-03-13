import React from 'react';
import {Image, View} from 'react-native';
import {PrincipalText} from '../texts/PrincipalText.tsx';
import styles from './styles.tsx';

interface IHeader {
  text?: string;
  points?: string;
}

export const HeaderComponent: React.FC<IHeader> = ({text, points}) => {
  return (
    <View style={styles.container}>
      {text && <PrincipalText text={text} styles={styles.title} />}
      {!text && (
        <Image
          source={require('../../assets/login.png')}
          style={styles.image}
        />
      )}
      {points && <PrincipalText text={points} styles={styles.points} />}
    </View>
  );
};
