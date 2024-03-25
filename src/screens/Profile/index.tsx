import React from 'react';
import {Pressable, View} from 'react-native';
import profileStyles from './styles.ts';
import {Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../utils/color.ts';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {PrincipalTextInput} from '../../components/textInput/PrincipalTextInput.tsx';
import {typography} from '../../utils/typography.ts';
import {PrimaryButton} from '../../components/buttons/PrimaryButton.tsx';

interface IProfileScreen {}

const ProfileScreen = ({}: IProfileScreen) => {
  return (
    <View style={profileStyles.container}>
      <Avatar.Image
        style={profileStyles.imageProfile}
        size={130}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png',
        }}
      />
      <View style={profileStyles.containerIcons}>
        <Pressable>
          <FontAwesome name={'pencil'} size={20} color={Colors.primary} />
        </Pressable>
        <Pressable>
          <FontAwesome name={'trash'} size={20} color={Colors.negative} />
        </Pressable>
      </View>
      <PrincipalText text={'Juanito Test'} styles={profileStyles.name} />
      <PrincipalText text={'150 pts'} styles={profileStyles.points} />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{phone: '', name: '', document: ''}}
          //validationSchema={creteSchema}
          onSubmit={values => console.log(values)}>
          {({errors, touched, handleSubmit, values, setFieldValue}) => (
            <View>
              <PrincipalTextInput
                value={values.name}
                valueChange={'name'}
                change={setFieldValue}
                style={profileStyles.textInput}
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
                style={profileStyles.textInput}
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
                value={values.document}
                valueChange={'document'}
                change={setFieldValue}
                style={profileStyles.textInput}
                label={'Documento'}
                mode={'outlined'}
                nameIcon={'badge-account-horizontal-outline'}
                keyboard={'default'}
                error={!!errors?.document && touched?.document}
              />
              {errors?.document && touched?.document && (
                <PrincipalText
                  text={errors.document}
                  styles={typography.error}
                />
              )}
              <View style={profileStyles.containerButton}>
                <PrimaryButton
                  text={'Editar'}
                  backgroundColor={Colors.primary}
                  disabled={false}
                  action={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={profileStyles.containerButtonSupport}>
          <PrimaryButton
            text={'Comunicarse a soporte'}
            backgroundColor={Colors.orange}
            disabled={false}
            action={() => console.log('')}
          />
        </View>
        <PrincipalText text={'Cerrar sesión'} styles={profileStyles.close} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ProfileScreen;
