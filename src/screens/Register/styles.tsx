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
});

export default registerStyles;
