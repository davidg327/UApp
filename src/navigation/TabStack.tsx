import * as React from 'react';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/Home';
import {Colors} from '../utils/color.ts';
import {Pressable} from 'react-native';
import {PrincipalText} from '../components/texts/PrincipalText.tsx';
import {fontFamily} from '../utils/fonts.ts';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

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
    } else if (routeName === 'ProfileTab') {
      iconName = 'user-alt';
      name = 'Perfil';
    }
    return (
      <Pressable
        style={{
          alignItems: 'center',
          marginRight: routeName === 'HistoryTab' ? 15 : 0,
          marginLeft: routeName === 'TrophyTab' ? 15 : 0,
        }}
        onPress={() => navigate(routeName)}>
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
      renderCircle={() => (
        <Pressable style={{marginTop: -20}}>
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
        component={() => <HomeScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export default TabStack;
