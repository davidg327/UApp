import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';
import {fontFamily} from '../../utils/fonts.ts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
    backgroundColor: Colors.second,
  },
  icon: {
    position: 'absolute',
    left: '5%',
    top: '30%',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    top: '30%',
    color: Colors.white,
    fontFamily: fontFamily.fontFamilySemiBold,
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '3%',
  },
  points: {
    position: 'absolute',
    right: '5%',
    top: '30%',
    color: Colors.white,
    fontFamily: fontFamily.fontFamilySemiBold,
  },
});

export default styles;
