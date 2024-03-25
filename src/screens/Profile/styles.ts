import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/color.ts';

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageProfile: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  containerIcons: {
    position: 'absolute',
    height: '15%',
    justifyContent: 'space-between',
    right: '30%',
    marginTop: '5%',
  },
  name: {
    marginTop: '10%',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  points: {
    marginTop: '2%',
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.text,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  containerButton: {
    marginTop: '10%',
    alignSelf: 'center',
    width: '50%',
  },
  containerButtonSupport: {
    marginTop: '5%',
    alignSelf: 'center',
    width: '50%',
  },
  close: {
    marginTop: '5%',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.text,
    marginBottom: '20%',
    textDecorationLine: 'underline',
  },
});

export default profileStyles;
