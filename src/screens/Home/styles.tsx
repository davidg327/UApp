import {StyleSheet} from 'react-native';
import {fontFamily} from '../../utils/fonts.ts';
import {Colors} from '../../utils/color.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: '5%',
    marginLeft: '5%',
    fontFamily: fontFamily.fontFamilyBold,
    fontSize: 20,
    color: Colors.black,
  },
  more: {
    marginTop: '5%',
    marginRight: '5%',
    fontFamily: fontFamily.fontFamilyRegularItalic,
    fontSize: 14,
    color: Colors.black,
  },
  containerFlat: {
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 10,
  },
  containerBottom: {
    marginBottom: '30%',
  },
});

export default styles;
