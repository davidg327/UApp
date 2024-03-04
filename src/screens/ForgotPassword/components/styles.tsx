import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color.ts';
import {fontFamily} from '../../../utils/fonts.ts';

const componentsForgotPasswordStyle = StyleSheet.create({
  subtitle: {
    marginTop: '10%',
    alignSelf: 'center',
    width: '70%',
    textAlign: 'justify',
    color: Colors.second,
    fontSize: 12,
    fontFamily: fontFamily.fontFamilyRegular,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: '5%',
    fontFamily: fontFamily.fontFamilyRegular,
  },
  containerButton: {
    marginTop: '15%',
    marginBottom: '20%',
    alignSelf: 'center',
    width: '50%',
  },
});

export default componentsForgotPasswordStyle;
