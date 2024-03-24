import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import Dropdown from 'react-native-input-select';

interface IInputSelectComponent {
  placeHolder: string;
  items: {
    label: string;
    value: string;
  }[];
  dropdownStyle: ViewStyle;
  placeholderStyle: TextStyle;
  value: string;
  onChange: (value: number) => void;
  selectStyle: TextStyle;
  color: string;
}

export const InputSelectComponent = ({
  placeHolder,
  items,
  dropdownStyle,
  placeholderStyle,
  value,
  onChange,
  selectStyle,
  color,
}: IInputSelectComponent) => {
  return (
    <Dropdown
      placeholder={placeHolder}
      options={items}
      dropdownStyle={dropdownStyle}
      placeholderStyle={placeholderStyle}
      selectedValue={value}
      onValueChange={onChange}
      selectedItemStyle={selectStyle}
      primaryColor={color}
    />
  );
};
