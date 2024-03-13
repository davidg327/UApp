import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color.ts';
import {fontFamily} from '../../../utils/fonts.ts';

const styles = StyleSheet.create({
  cardIncentive: {
    marginRight: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
  },
  points: {
    color: Colors.text,
    fontSize: 12,
    fontFamily: fontFamily.fontFamilyBlack,
    marginTop: 10,
    textAlign: 'center',
  },
  cardService: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageService: {
    width: 120,
    height: 120,
  },
  textService: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: fontFamily.fontFamilyRegular,
    color: Colors.text,
  },
  textServiceState: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: fontFamily.fontFamilyRegular,
    color: Colors.primary,
  },
  imageBlog: {
    width: 180,
    height: 120,
    marginRight: 20,
    borderRadius: 20,
  },
  gradientBlog: {
    width: 180,
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
