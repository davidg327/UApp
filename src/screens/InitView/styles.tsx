import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const initViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '40%',
    marginBottom: '30%',
  },
  containerButton: {
    marginBottom: '10%',
    width: '60%',
  },
});

export default initViewStyles;
