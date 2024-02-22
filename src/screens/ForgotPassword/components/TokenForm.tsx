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
import {ValidateToken} from '../../../functions/ErrorHandling.ts';

export interface ITokenForm {
  setChangeView: (changeView: string) => void;
}

export const TokenForm: React.FC<ITokenForm> = ({setChangeView}) => {
  const creteSchema = Yup.object().shape({
    token: ValidateToken(),
  });

  const handleForm = (token: string) => {
    console.log(token);
    setChangeView('ResetForm');
  };

  return (
    <View>
      <PrincipalText
        text={'Digite el token enviado a su celular para validar'}
        styles={componentsForgotPasswordStyle.subtitle}
      />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{token: ''}}
          validationSchema={creteSchema}
          onSubmit={values => handleForm(values.token)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.token}
                valueChange={'token'}
                change={setFieldValue}
                style={componentsForgotPasswordStyle.textInput}
                label={'Token'}
                mode={'outlined'}
                nameIcon={'keyboard'}
                keyboard={'numeric'}
                error={!!errors?.token && touched?.token}
              />
              {errors?.token && touched?.token && (
                <PrincipalText text={errors.token} styles={typography.error} />
              )}
              <View style={componentsForgotPasswordStyle.containerButton}>
                <PrimaryButton
                  text={'Validar token'}
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
