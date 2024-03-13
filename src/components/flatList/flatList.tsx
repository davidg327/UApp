import React from 'react';
import {FlatList, ViewStyle} from 'react-native';

interface IFlatListComponent {
  data: any;
  render: any;
  horizontal: boolean;
  style?: ViewStyle;
}
export const FlatListComponent: React.FC<IFlatListComponent> = ({
  data,
  render,
  horizontal,
  style,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={(item: any) => item.id}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style}
    />
  );
};
