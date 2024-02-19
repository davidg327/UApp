import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

export interface IPrincipalText {
  text: string;
  styles: StyleProp<TextStyle>;
}

export const PrincipalText: React.FC<IPrincipalText> = ({text, styles}) => {
  return <Text style={styles}>{text}</Text>;
};
