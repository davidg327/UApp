import * as React from 'react';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/Home';
import {Colors} from '../utils/color.ts';
import {Image, Pressable, View} from 'react-native';
import {PrincipalText} from '../components/texts/PrincipalText.tsx';
import {fontFamily} from '../utils/fonts.ts';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import ProfileScreen from '../screens/Profile';

const TabStack = ({}) => {
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    let iconName = '';
    let name = '';
    if (routeName === 'HomeTab') {
      iconName = 'home';
      name = 'Home';
    } else if (routeName === 'HistoryTab') {
      iconName = 'history';
      name = 'Historial';
    } else if (routeName === 'TrophyTab') {
      iconName = 'trophy';
      name = 'Premios';
    }
    return (
      <Pressable
        style={{
          alignItems: 'center',
          marginRight: routeName === 'HistoryTab' ? 15 : 0,
          marginLeft: routeName === 'TrophyTab' ? 15 : 0,
        }}
        onPress={() => navigate(routeName)}>
        {routeName === 'ProfileTab' && (
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png',
            }}
            style={{width: 40, height: 40}}
          />
        )}
        {routeName !== 'ProfileTab' && (
          <View
            style={{
              alignItems: 'center',
            }}>
            <IconAwesome
              name={iconName}
              size={20}
              color={selectedTab === routeName ? Colors.white : Colors.gray}
            />
            <PrincipalText
              text={name}
              styles={{
                color: selectedTab === routeName ? Colors.white : Colors.gray,
                fontFamily: fontFamily.fontFamilySemiBold,
                fontSize: 15,
              }}
            />
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      height={65}
      circleWidth={50}
      bgColor={Colors.second}
      screenOptions={{headerShown: false}}
      initialRouteName="HomeTab"
      borderTopLeftRight
      renderCircle={({navigate}) => (
        <Pressable style={{marginTop: -20}} onPress={() => navigate('Order')}>
          <IconAwesome name={'plus-circle'} size={40} color={Colors.second} />
        </Pressable>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="HomeTab"
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        name="HistoryTab"
        component={() => <HomeScreen />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="TrophyTab"
        component={() => <HomeScreen />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="ProfileTab"
        component={() => <ProfileScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export default TabStack;
