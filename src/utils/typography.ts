import {StyleSheet} from 'react-native';
import {Colors} from './color.ts';

export const typography = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  error: {
    marginLeft: '5%',
    fontSize: 10,
    fontWeight: '800',
    color: Colors.negative,
    marginTop: '2%',
  },
});
