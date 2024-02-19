import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const buttonsStyles = StyleSheet.create({
  containerPrimary: {
    borderRadius: 16,
    paddingVertical: 8,
  },
  textButtonPrimary: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default buttonsStyles;
