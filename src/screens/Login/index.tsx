import React from 'react';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import loginStyles from './styles.tsx';
import {typography} from '../../utils/typography.ts';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {PrincipalTextInput} from '../../components/textInput/PrincipalTextInput.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Colors} from '../../utils/color.ts';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ValidatePassword,
  ValidatePhone,
} from '../../functions/ErrorHandling.ts';

type RootStackParamList = {
  ForgotPassword: undefined;
  Home: undefined;
};

const LoginScreen = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const creteSchema = Yup.object().shape({
    phone: ValidatePhone(),
    password: ValidatePassword(),
  });

  const redirect = (values: any) => {
    console.log(values);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <Image
        source={require('../../assets/login.png')}
        style={loginStyles.image}
      />
      <PrincipalText
        styles={[typography.title, loginStyles.title]}
        text={'Iniciar sesión'}
      />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{phone: '', password: ''}}
          validationSchema={creteSchema}
          onSubmit={values => redirect(values)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.phone}
                valueChange={'phone'}
                change={setFieldValue}
                style={loginStyles.textInput}
                label={'Teléfono'}
                mode={'outlined'}
                nameIcon={'cellphone'}
                keyboard={'numeric'}
                error={!!errors?.phone && touched?.phone}
              />
              {errors?.phone && touched?.phone && (
                <PrincipalText text={errors.phone} styles={typography.error} />
              )}
              <PrincipalTextInput
                value={values.password}
                valueChange={'password'}
                change={setFieldValue}
                style={loginStyles.textInput}
                label={'Contraseña'}
                mode={'outlined'}
                nameIcon={'eye'}
                security={true}
                keyboard={'default'}
                error={!!errors?.password && touched?.password}
              />
              {errors?.password && touched?.password && (
                <PrincipalText
                  text={errors.password}
                  styles={typography.error}
                />
              )}
              <Pressable
                style={loginStyles.containerForgotPassword}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <PrincipalText
                  text={'¿Olvidó su contraseña?'}
                  styles={loginStyles.textForgotPassword}
                />
              </Pressable>
              <View style={loginStyles.containerButton}>
                <PrimaryButton
                  text={'Iniciar sesión'}
                  backgroundColor={Colors.primary}
                  disabled={false}
                  action={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
