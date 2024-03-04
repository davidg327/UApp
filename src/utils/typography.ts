import {StyleSheet} from 'react-native';
import {Colors} from './color.ts';
import {fontFamily} from './fonts.ts';

export const typography = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fontFamily.fontFamilyBold,
  },
  error: {
    marginLeft: '5%',
    fontSize: 10,
    fontFamily: fontFamily.fontFamilyBlack,
    color: Colors.negative,
    marginTop: '2%',
  },
});
