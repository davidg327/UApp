import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles.tsx';
import {PrincipalText} from '../../../components/texts/PrincipalText.tsx';
import LinearGradient from 'react-native-linear-gradient';

interface IBlogs {
  item: any;
}

export const Blogs: React.FC<IBlogs> = ({item}) => {
  return (
    <ImageBackground
      source={{uri: item.image}}
      style={styles.imageBlog}
      imageStyle={styles.imageBlog}
      >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.5)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradientBlog}>
        <PrincipalText text={'Nombre del blog'} styles={styles.textBlog} />
      </LinearGradient>
    </ImageBackground>
  );
};
