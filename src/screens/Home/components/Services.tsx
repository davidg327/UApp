import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles.tsx';
import {PrincipalText} from '../../../components/texts/PrincipalText.tsx';

interface IServices {}

export const Services: React.FC<IServices> = ({}) => {
  return (
    <View style={styles.cardService}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
        }}
        style={styles.imageService}
      />
      <View>
        <PrincipalText text={'Hora: 10:20 am'} styles={styles.textService} />
        <PrincipalText
          text={'Nombre: Juan Carrasquilla'}
          styles={styles.textService}
        />
        <PrincipalText
          text={'Teléfono: 3190929282'}
          styles={styles.textService}
        />
        <PrincipalText
          text={'Estado: En curso'}
          styles={styles.textServiceState}
        />
      </View>
    </View>
  );
};
