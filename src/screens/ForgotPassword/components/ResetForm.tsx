import React from 'react';
import {View} from 'react-native';
import {PrincipalText} from '../../../components/texts/PrincipalText.tsx';
import componentsForgotPasswordStyle from './styles.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {PrincipalTextInput} from '../../../components/textInput/PrincipalTextInput.tsx';
import {typography} from '../../../utils/typography.ts';
import {PrimaryButton} from '../../../components/buttons/PrimaryButton.tsx';
import {Colors} from '../../../utils/color.ts';
import * as Yup from 'yup';
import {ValidatePassword} from '../../../functions/ErrorHandling.ts';
import {useNavigation} from '@react-navigation/native';

export interface IResetForm {
  setChangeView: (changeView: string) => void;
}

export const ResetForm: React.FC<IResetForm> = ({setChangeView}) => {
  const navigation = useNavigation();

  const creteSchema = Yup.object().shape({
    password: ValidatePassword(),
  });

  const handleForm = (password: string) => {
    console.log(password);
    setChangeView('PhoneForm');
    navigation.goBack();
  };

  return (
    <View>
      <PrincipalText
        text={
          'Escriba su nueva contraseña para que pueda volver a iniciar sesión'
        }
        styles={componentsForgotPasswordStyle.subtitle}
      />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{password: ''}}
          validationSchema={creteSchema}
          onSubmit={values => handleForm(values.password)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.password}
                valueChange={'password'}
                change={setFieldValue}
                style={componentsForgotPasswordStyle.textInput}
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
              <View style={componentsForgotPasswordStyle.containerButton}>
                <PrimaryButton
                  text={'Cambiar contraseña'}
                  backgroundColor={Colors.primary}
                  disabled={false}
                  action={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};
