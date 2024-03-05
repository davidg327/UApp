import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/Home';
import {Colors} from '../utils/color.ts';
import {View} from "react-native";
import {PrincipalText} from "../components/texts/PrincipalText.tsx";
import {fontFamily} from "../utils/fonts.ts";

const TabStack = ({}) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = '';
                    let name = '';
                    if (route.name === 'HomeTab') {
                        iconName = 'home';
                        name = 'Home';
                    } else if (route.name === 'HistoryTab') {
                        iconName = 'history';
                        name = 'Historial';
                    } else if (route.name === 'OrderTab') {
                       iconName = 'plus-circle';
                        name = 'Crear';
                    } else if (route.name === 'TrophyTab') {
                       iconName = 'trophy';
                        name = 'Premios';
                    } else if (route.name === 'ProfileTab'){
                        iconName = 'user-alt';
                        name = 'Perfil';
                    }
                    // You can return any component that you like here!
                    return <View style={{alignItems:'center'}}>
                        <IconAwesome name={iconName} size={size} color={color} />
                        <PrincipalText
                            text={name}
                            styles={{
                            color: focused ? Colors.white : color,
                            fontFamily: fontFamily.fontFamilySemiBold,
                            fontSize: 15,
                        }} />
                    </View>;
                },
                headerShown: false,
                gestureEnabled: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: Colors.gray,
                tabBarActiveTintColor: Colors.white,
                tabBarStyle: {
                    borderTopWidth: 0,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: Colors.second,
                    height: 60,
                },
            })}>
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{tabBarLabel: () => null}}
            />
            <Tab.Screen
                name="HistoryTab"
                component={HomeScreen}
                options={{tabBarLabel: () => null}}
            />
            <Tab.Screen
                name="OrderTab"
                component={HomeScreen}
                options={{tabBarLabel: () => null}}
            />
            <Tab.Screen
                name="TrophyTab"
                component={HomeScreen}
                options={{tabBarLabel: () => null}}
            />
            <Tab.Screen
                name="ProfileTab"
                component={HomeScreen}
                options={{tabBarLabel: () => null}}
            />
        </Tab.Navigator>
    );
};

export default TabStack;
