import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color.ts';

const componentsForgotPasswordStyle = StyleSheet.create({
  subtitle: {
    marginTop: '10%',
    alignSelf: 'center',
    width: '70%',
    textAlign: 'justify',
    color: Colors.second,
    fontSize: 12,
    fontWeight: '400',
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  containerButton: {
    marginTop: '15%',
    marginBottom: '20%',
    alignSelf: 'center',
    width: '50%',
  },
});

export default componentsForgotPasswordStyle;
