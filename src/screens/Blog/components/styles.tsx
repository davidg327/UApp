import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color.ts';
import {fontFamily} from '../../../utils/fonts.ts';

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  imageBlog: {
    width: 150,
    height: 140,
    marginRight: 20,
    borderRadius: 20,
  },
  gradientBlog: {
    width: 150,
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  textBlog: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: fontFamily.fontFamilyBlack,
    marginTop: 10,
    marginLeft: '5%',
  },
});

export default styles;
