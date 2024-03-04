import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';
import {fontFamily} from '../../utils/fonts.ts';

const buttonsStyles = StyleSheet.create({
  containerPrimary: {
    borderRadius: 16,
    paddingVertical: 8,
  },
  textButtonPrimary: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    fontFamily: fontFamily.fontFamilyBold,
  },
});

export default buttonsStyles;
