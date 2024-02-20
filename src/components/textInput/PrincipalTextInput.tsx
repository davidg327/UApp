import React from 'react';
import {TextInput} from 'react-native-paper';
import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';
import {Colors} from '../../utils/color.ts';

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
      keyboardType={keyboard}
      outlineColor={Colors.third}
      theme={{
        colors: {
          primary: Colors.third,
          error: Colors.negativeLight,
        },
      }}
      secureTextEntry={security}
      placeholderTextColor={'black'}
      left={<TextInput.Icon icon={nameIcon} />}
      error={error}
    />
  );
};
