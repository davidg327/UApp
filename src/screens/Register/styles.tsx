import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const registerStyles = StyleSheet.create({
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
  containerInputSelect: {
    marginTop: '6%',
    alignSelf: 'center',
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
    minHeight: 0,
  },
  containerButton: {
    marginTop: '10%',
    marginBottom: '20%',
    alignSelf: 'center',
    width: '50%',
  },
});

export default registerStyles;
