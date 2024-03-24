import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import registerStyles from './styles.tsx';
import {typography} from '../../utils/typography.ts';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  ValidateDocument,
  ValidateName,
  ValidatePassword,
  ValidatePhone,
  ValidateTypeDocument,
} from '../../functions/ErrorHandling.ts';
import {PrincipalTextInput} from '../../components/textInput/PrincipalTextInput.tsx';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';
import {Colors} from '../../utils/color.ts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CalendarsComponent from '../../components/calendar/calendars.tsx';
import {InputSelectComponent} from '../../components/inputSelect/InputSelectComponent.tsx';
import {fontFamily} from '../../utils/fonts.ts';

type RootStackParamList = {
  Home: undefined;
};

const RegisterScreen = ({}) => {
  const creteSchema = Yup.object().shape({
    name: ValidateName(),
    phone: ValidatePhone(),
    type_document: ValidateTypeDocument(),
    document: ValidateDocument(),
    password: ValidatePassword(),
  });

  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRegister = (values: any) => {
    console.log(values, 'test');
    navigate.navigate('Home');
  };

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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            type_document: '',
            document: '',
            password: '',
            birthday: '',
          }}
          validationSchema={creteSchema}
          onSubmit={values => handleRegister(values)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.name}
                valueChange={'name'}
                change={setFieldValue}
                style={registerStyles.textInput}
                label={'Nombre'}
                mode={'outlined'}
                nameIcon={'account'}
                keyboard={'default'}
                error={!!errors?.name && touched?.name}
              />
              {errors?.name && touched?.name && (
                <PrincipalText text={errors.name} styles={typography.error} />
              )}
              <PrincipalTextInput
                value={values.phone}
                valueChange={'phone'}
                change={setFieldValue}
                style={registerStyles.textInput}
                label={'Teléfono'}
                mode={'outlined'}
                nameIcon={'cellphone'}
                keyboard={'default'}
                error={!!errors?.phone && touched?.phone}
              />
              {errors?.phone && touched?.phone && (
                <PrincipalText text={errors.phone} styles={typography.error} />
              )}
              <InputSelectComponent
                placeHolder={'Tipo de documento'}
                items={[
                  {label: 'Cédula de ciudadania', value: 'CC'},
                  {label: 'Tarjeta de identidad', value: 'TI'},
                ]}
                dropdownStyle={{
                  ...registerStyles.containerInputSelect,
                  borderColor:
                    errors?.type_document && touched?.type_document
                      ? Colors.negative
                      : Colors.text,
                }}
                placeholderStyle={{
                  color:
                    errors?.type_document && touched?.type_document
                      ? Colors.negative
                      : Colors.text,
                  fontSize: 14,
                }}
                value={values.type_document}
                onChange={(value: number) =>
                  setFieldValue('type_document', value)
                }
                selectStyle={{
                  color: Colors.primary,
                  fontFamily: fontFamily.fontFamilyRegular,
                }}
                color={Colors.primary}
              />
              {errors?.type_document && touched?.type_document && (
                <PrincipalText
                  text={errors.type_document}
                  styles={typography.error}
                />
              )}
              <PrincipalTextInput
                value={values.document}
                valueChange={'document'}
                change={setFieldValue}
                style={registerStyles.textInput}
                label={'Documento'}
                mode={'outlined'}
                nameIcon={'badge-account-horizontal-outline'}
                keyboard={'numeric'}
                error={!!errors?.document && touched?.document}
              />
              {errors?.document && touched?.document && (
                <PrincipalText
                  text={errors.document}
                  styles={typography.error}
                />
              )}
              <PrincipalTextInput
                value={values.password}
                valueChange={'password'}
                change={setFieldValue}
                style={registerStyles.textInput}
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
              <CalendarsComponent
                valueChange={'birthday'}
                label={'Cumpleaños'}
                change={setFieldValue}
                style={registerStyles.textInput}
                error={!!errors?.birthday && touched?.birthday}
              />
              <View style={registerStyles.containerButton}>
                <PrimaryButton
                  text={'Crear cuenta'}
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

export default RegisterScreen;
