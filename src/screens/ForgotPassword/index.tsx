import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import forgotPasswordStyles from './styles.tsx';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {typography} from '../../utils/typography.ts';
import {PhoneForm} from './components/PhoneForm.tsx';
import {TokenForm} from './components/TokenForm.tsx';
import {ResetForm} from './components/ResetForm.tsx';

export interface IForgotPassword {}

const ForgotPasswordScreen = ({}: IForgotPassword) => {
  const [changeView, setChangeView] = useState('PhoneForm');
  return (
    <SafeAreaView style={forgotPasswordStyles.container}>
      <PrincipalText
        text={'Recuperar contraseña'}
        styles={[typography.title, forgotPasswordStyles.title]}
      />
      {changeView === 'PhoneForm' && (
        <PhoneForm setChangeView={setChangeView} />
      )}
      {changeView === 'TokenForm' && (
        <TokenForm setChangeView={setChangeView} />
      )}
      {changeView === 'ResetForm' && (
        <ResetForm setChangeView={setChangeView} />
      )}
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
