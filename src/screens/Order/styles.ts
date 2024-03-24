import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const orderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerInputSelect: {
    marginTop: '6%',
    alignSelf: 'center',
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
    minHeight: 0,
  },
  containerButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  textPoints: {
    marginTop: '5%',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text,
  },
  points: {
    marginTop: '2%',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  textMessage: {
    marginTop: '2%',
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: '200',
    color: Colors.text,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  containerButtonSave: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '15%',
  },
});

export default orderStyles;
