import React from 'react';
import {View} from 'react-native';
import orderStyles from './styles.ts';
import {HeaderComponent} from '../../components/header/Header.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../utils/color.ts';
import {fontFamily} from '../../utils/fonts.ts';
import {InputSelectComponent} from '../../components/inputSelect/InputSelectComponent.tsx';
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
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {typography} from '../../utils/typography.ts';
import {PrimaryButton} from "../../components/buttons/PrimaryButton.tsx";
import CalendarsComponent from "../../components/calendar/calendars.tsx";

interface IOrderScreen {}

const OrderScreen = ({}: IOrderScreen) => {
  const navigation = useNavigation();

  const creteSchema = Yup.object().shape({
    name: ValidateName(),
    phone: ValidatePhone(),
    type_document: ValidateTypeDocument(),
    document: ValidateDocument(),
    password: ValidatePassword(),
  });

  const handleCreateOrder = (values: any) => {
    console.log(values);
  };

  return (
    <View style={orderStyles.container}>
      <HeaderComponent
        text={'Crear Servicio'}
        goBack={() => navigation.goBack()}
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
          onSubmit={values => handleCreateOrder(values)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
              <View>
                  <InputSelectComponent
                      placeHolder={'Tipo de residuo'}
                      items={[
                          {label: 'Carton', value: '01'},
                          {label: 'Plastico', value: '02'},
                          {label: 'Papel', value: '03'},
                          {label: 'Sin organizar', value: '04'},
                      ]}
                      dropdownStyle={{
                          ...orderStyles.containerInputSelect,
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
                  <InputSelectComponent
                      placeHolder={'Cantidad'}
                      items={[
                          {label: '0 a 1 KG', value: '01'},
                          {label: '1 a 2 KG', value: '02'},
                          {label: '2 a 3 KG', value: '03'},
                          {label: '3 a 4 KG', value: '04'},
                          {label: '4 a 5 KG', value: '05'},
                          {label: 'más de 5 KG', value: '06'},
                      ]}
                      dropdownStyle={{
                          ...orderStyles.containerInputSelect,
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
                  {errors?.name && touched?.name && (
                      <PrincipalText text={errors.name} styles={typography.error} />
                  )}
                  <View style={orderStyles.containerButton}>
                      <PrimaryButton
                          text={'Agregar otro residuo'}
                          backgroundColor={Colors.primary}
                          disabled={false}
                          action={() => console.log('')}
                      />
                  </View>
                  <PrincipalText text={'Puntos aproximados de ganancia'} styles={orderStyles.textPoints} />
                  <PrincipalText text={'500 pts'} styles={orderStyles.points} />
                  <PrincipalText text={'*Estos puntos pueden cambiar cuando se validen al entregarse'} styles={orderStyles.textMessage} />
                  <CalendarsComponent
                      valueChange={'date'}
                      change={() => console.log('')}
                      style={orderStyles.textInput}
                      error={false}
                      label={'Seleccionar fecha de recogida'}
                  />
                  <View style={orderStyles.containerButtonSave}>
                      <PrimaryButton
                          text={'Crear'}
                          backgroundColor={Colors.primary}
                          disabled={false}
                          action={() => console.log('')}
                      />
                  </View>
              </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default OrderScreen;
