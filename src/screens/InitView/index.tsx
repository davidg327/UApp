import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import initViewStyles from './styles.tsx';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';
import {Colors} from '../../utils/color.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const InitViewScreen = ({}) => {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
          action={() => navigate.navigate('Login')}
        />
      </View>
      <View style={initViewStyles.containerButton}>
        <PrimaryButton
          text={'Registrarse'}
          backgroundColor={Colors.second}
          disabled={false}
          action={() => navigate.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitViewScreen;
