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
import {ValidatePhone} from '../../../functions/ErrorHandling.ts';

export interface IPhoneForm {
  setChangeView: (changeView: string) => void;
}

export const PhoneForm: React.FC<IPhoneForm> = ({setChangeView}) => {
  const creteSchema = Yup.object().shape({
    phone: ValidatePhone(),
  });

  const handleForm = (phone: string) => {
    console.log(phone);
    setChangeView('TokenForm');
  };

  return (
    <View>
      <PrincipalText
        text={
          'Digite su teléfono para poder enviarle un token para validar antes de cambiar la contraseña'
        }
        styles={componentsForgotPasswordStyle.subtitle}
      />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{phone: ''}}
          validationSchema={creteSchema}
          onSubmit={values => handleForm(values.phone)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.phone}
                valueChange={'phone'}
                change={setFieldValue}
                style={componentsForgotPasswordStyle.textInput}
                label={'Teléfono'}
                mode={'outlined'}
                nameIcon={'cellphone'}
                keyboard={'numeric'}
                error={!!errors?.phone && touched?.phone}
              />
              {errors?.phone && touched?.phone && (
                <PrincipalText text={errors.phone} styles={typography.error} />
              )}
              <View style={componentsForgotPasswordStyle.containerButton}>
                <PrimaryButton
                  text={'Validar teléfono'}
                  backgroundColor={Colors.third}
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
