import React from 'react';
import styles from './styles.tsx';
import {View} from 'react-native';
import {HeaderComponent} from '../../components/header/Header.tsx';
import {useNavigation} from '@react-navigation/native';
import {MoreInfo} from './components/MoreInfo.tsx';
import {FlatListTwoColumnsComponent} from '../../components/flatList/flatListTwoColumns.tsx';

interface IMoreInfoScreen {
  route: any;
}

const MoreInfoScreen = ({route}: IMoreInfoScreen) => {
  const {items, title} = route.params;

  const navigation = useNavigation();

  const renderItemMoreInfo = (item: any) => {
    return <MoreInfo item={item.item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderComponent text={title} goBack={() => navigation.goBack()} />
      <View style={styles.containerCards}>
        <FlatListTwoColumnsComponent data={items} render={renderItemMoreInfo} />
      </View>
    </View>
  );
};

export default MoreInfoScreen;
