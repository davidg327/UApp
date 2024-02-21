import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import registerStyles from './styles.tsx';
import {typography} from '../../utils/typography.ts';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  ValidatePassword,
  ValidatePhone,
} from '../../functions/ErrorHandling.ts';

const RegisterScreen = ({}) => {
  const creteSchema = Yup.object().shape({
    phone: ValidatePhone(),
    password: ValidatePassword(),
  });

  return (
    <SafeAreaView style={registerStyles.container}>
      <Image
        source={require('../../assets/login.png')}
        style={registerStyles.image}
      />
      <PrincipalText
        styles={[typography.title, registerStyles.title]}
        text={'Registrarse'}
      />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{phone: '', password: ''}}
          validationSchema={creteSchema}
          onSubmit={values => console.log(values)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => <View />}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
