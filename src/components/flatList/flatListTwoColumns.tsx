import React from 'react';
import {FlatList, ViewStyle} from 'react-native';

interface IFlatListTwoColumnsComponent {
  data: any;
  render: any;
  style?: ViewStyle;
}
export const FlatListTwoColumnsComponent = ({
  data,
  render,
  style,
}: IFlatListTwoColumnsComponent) => {
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
