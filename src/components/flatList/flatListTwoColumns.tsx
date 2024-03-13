import React from 'react';
import {FlatList, ViewStyle} from 'react-native';

interface IFlatListTwoColumnsComponent {
  data: any;
  render: any;
  style?: ViewStyle;
}
export const FlatListTwoColumnsComponent: React.FC<
  IFlatListTwoColumnsComponent
> = ({data, render, style}) => {
  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={(item: any) => item.id}
      showsHorizontalScrollIndicator={false}
      columnWrapperStyle={style}
      numColumns={2}
    />
  );
};
