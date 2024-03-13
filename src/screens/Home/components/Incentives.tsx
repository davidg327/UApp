import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles.tsx';
import {PrincipalText} from '../../../components/texts/PrincipalText.tsx';

interface IIncentives {
  item: any;
}

export const Incentives: React.FC<IIncentives> = ({item}) => {
  return (
    <View style={styles.cardIncentive}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <PrincipalText text={`${item.points} puntos`} styles={styles.points} />
    </View>
  );
};
