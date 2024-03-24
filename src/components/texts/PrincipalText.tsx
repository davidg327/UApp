import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

export interface IPrincipalText {
  text: string;
  styles: StyleProp<TextStyle>;
}

export const PrincipalText= ({text, styles}: IPrincipalText) => {
  return <Text style={styles}>{text}</Text>;
};
