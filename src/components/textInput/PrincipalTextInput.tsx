import React from 'react';
import {TextInput} from 'react-native-paper';
import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';
import {Colors} from '../../utils/color.ts';
import {fontFamily} from '../../utils/fonts.ts';

export interface IPrincipalTextInput {
  value: string;
  valueChange: string;
  change: (value: string, text: string) => void;
  style: StyleProp<ViewStyle>;
  label: string;
  mode: 'flat' | 'outlined' | undefined;
  nameIcon: string;
  security?: boolean | undefined;
  keyboard: KeyboardTypeOptions | undefined;
  error: boolean | undefined;
}

export const PrincipalTextInput: React.FC<IPrincipalTextInput> = ({
  value,
  valueChange,
  change,
  style,
  label,
  mode,
  nameIcon,
  security,
  keyboard,
  error,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={text => change(valueChange, text)}
      mode={mode}
      style={style}
      contentStyle={{fontFamily: fontFamily.fontFamilyRegular}}
      keyboardType={keyboard}
      outlineColor={Colors.text}
      theme={{
        colors: {
          primary: Colors.text,
          error: Colors.negativeLight,
        },
      }}
      textColor={Colors.primary}
      secureTextEntry={security}
      left={<TextInput.Icon icon={nameIcon} />}
      error={error}
    />
  );
};
