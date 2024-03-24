import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles.tsx';
import {PrincipalText} from '../../../components/texts/PrincipalText.tsx';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IServices {}

type RootStackParamList = {
  Map: undefined;
};

export const Services= ({}: IServices) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      style={styles.cardService}
      onPress={() => navigation.navigate('Map')}>
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
    </Pressable>
  );
};
