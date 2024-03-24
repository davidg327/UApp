import React from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {HeaderComponent} from '../../components/header/Header.tsx';
import styles from './styles.tsx';
import {PrincipalText} from '../../components/texts/PrincipalText.tsx';
import {FlatListComponent} from '../../components/flatList/flatList.tsx';
import {Incentives} from './components/Incentives.tsx';
import {Services} from './components/Services.tsx';
import {Blogs} from './components/Blogs.tsx';
import {Tips} from './components/Tips.tsx';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const incentives = [
  {
    id: 1,
    points: 1200,
    image:
      'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_categories/laika.png',
  },
  {
    id: 2,
    points: 1800,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo-Leonisa-600x400.svg/2560px-Logo-Leonisa-600x400.svg.png',
  },
  {
    id: 3,
    points: 2500,
    image:
      'https://seeklogo.com/images/F/farmatodo-logo-604F49B0CF-seeklogo.com.png',
  },
];

const blogs = [
  {
    id: 1,
    image:
      'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_categories/laika.png',
  },
  {
    id: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo-Leonisa-600x400.svg/2560px-Logo-Leonisa-600x400.svg.png',
  },
  {
    id: 3,
    image:
      'https://seeklogo.com/images/F/farmatodo-logo-604F49B0CF-seeklogo.com.png',
  },
];

type RootStackParamList = {
  MoreInfo: {
    items: {
      id: number;
      image: string;
    }[];
    title: string;
  };
};

const HomeScreen = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const renderItemIncentives = (item: any) => {
    return <Incentives item={item.item} />;
  };

  const renderItemBlogs = (item: any) => {
    return <Blogs item={item.item} />;
  };

  const renderItemTips = (item: any) => {
    return <Tips item={item.item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent points={'1200 puntos'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerRow}>
          <PrincipalText text={'Top incentivos'} styles={styles.title} />
          <PrincipalText text={'Ver más'} styles={styles.more} />
        </View>
        <FlatListComponent
          data={incentives}
          render={renderItemIncentives}
          horizontal={true}
          style={styles.containerFlat}
        />
        <PrincipalText text={'Servicio en curso'} styles={styles.title} />
        <Services />
        <View style={styles.containerRow}>
          <PrincipalText text={'Blogs'} styles={styles.title} />
          <Pressable
            onPress={() =>
              navigation.navigate('MoreInfo', {items: blogs, title: 'Blogs'})
            }>
            <PrincipalText text={'Ver más'} styles={styles.more} />
          </Pressable>
        </View>
        <FlatListComponent
          data={blogs}
          render={renderItemBlogs}
          horizontal={true}
          style={styles.containerFlat}
        />
        <View style={styles.containerRow}>
          <PrincipalText text={'Tips'} styles={styles.title} />
          <Pressable
            onPress={() =>
              navigation.navigate('MoreInfo', {items: blogs, title: 'Tips'})
            }>
            <PrincipalText text={'Ver más'} styles={styles.more} />
          </Pressable>
        </View>
        <FlatListComponent
          data={blogs}
          render={renderItemTips}
          horizontal={true}
          style={styles.containerFlat}
        />
        <View style={styles.containerBottom} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
