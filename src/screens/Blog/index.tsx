import React from 'react';
import styles from './styles.tsx';
import {View} from 'react-native';
import {HeaderComponent} from '../../components/header/Header.tsx';
import {useNavigation} from '@react-navigation/native';
import {Blogs} from './components/Blogs.tsx';
import {FlatListTwoColumnsComponent} from '../../components/flatList/flatListTwoColumns.tsx';

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

interface IBlogScreen {}

const BlogScreen = ({}: IBlogScreen) => {
  const navigation = useNavigation();

  const renderItemBlogs = (item: any) => {
    return <Blogs item={item.item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderComponent text={'Blogs'} goBack={() => navigation.goBack()} />
      <View style={styles.containerCards}>
        <FlatListTwoColumnsComponent
            data={blogs}
            render={renderItemBlogs}
        />
      </View>
    </View>
  );
};

export default BlogScreen;
