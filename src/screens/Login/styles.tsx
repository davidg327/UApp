import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '40%',
    height: 140,
    alignSelf: 'center',
    marginTop: '15%',
  },
  title: {
    marginTop: '10%',
    color: Colors.text,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  containerForgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '5%',
  },
  textForgotPassword: {
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  containerButton: {
    marginTop: '15%',
    marginBottom: '20%',
    alignSelf: 'center',
    width: '50%',
  },
});

export default loginStyles;
