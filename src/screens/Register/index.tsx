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
import Dropdown from 'react-native-input-select';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';
import {Colors} from '../../utils/color.ts';

const RegisterScreen = ({}) => {
  const creteSchema = Yup.object().shape({
    name: ValidateName(),
    phone: ValidatePhone(),
    type_document: ValidateTypeDocument(),
    document: ValidateDocument(),
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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            type_document: '',
            document: '',
            password: '',
          }}
          validationSchema={creteSchema}
          onSubmit={values => console.log(values)}>
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
              <Dropdown
                placeholder="Tipo de documento"
                options={[
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
                }}
                selectedValue={values.type_document}
                onValueChange={(value: any) =>
                  setFieldValue('type_document', value)
                }
                selectedItemStyle={{color: Colors.primary}}
                primaryColor={Colors.primary}
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
