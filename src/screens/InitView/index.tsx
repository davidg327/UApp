import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import initViewStyles from './styles.tsx';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';
import {Colors} from '../../utils/color.ts';

export interface IInitView {}

const InitViewScreen: React.FC<IInitView> = ({}) => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={initViewStyles.container}>
      <Image
        source={require('../../assets/initView.jpeg')}
        style={initViewStyles.image}
      />
      <View style={initViewStyles.containerButton}>
        <PrimaryButton
          text={'Iniciar sesión'}
          backgroundColor={Colors.primary}
          disabled={false}
          action={() => console.log('joa')}
        />
      </View>
      <View style={initViewStyles.containerButton}>
        <PrimaryButton
          text={'Registrarse'}
          backgroundColor={Colors.second}
          disabled={false}
          action={() => console.log('joa')}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitViewScreen;
