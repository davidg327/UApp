import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {PrincipalText} from '../texts/PrincipalText.tsx';
import styles from './styles.tsx';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../utils/color.ts';

interface IHeader {
  text?: string;
  points?: string;
  goBack?: () => void;
}

export const HeaderComponent = ({text, points, goBack}: IHeader) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <Pressable onPress={goBack} style={styles.icon}>
          <FontAwesome name={'angle-left'} size={20} color={Colors.white} />
        </Pressable>
      )}
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
