import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';
import Profile from '../screens/Profile';
import CreateNews from '../screens/CreateNews';
import FeedScreen from '../screens/FeedScreen';

import Ionicons from "react-native-vector-icons/Ionicons";

const AppTabNavigator = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator
        labeled={false}
        barStyle={this.state.light_theme?styles.bottomTabStyleLight:styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Create News") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name==="Profile"){
                iconName = focused ? "person": "person-outline";
            }
        
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Feed" component={FeedScreen} options = {{unmountOnBlur:true}} />
        <Tab.Screen name="Create News" component={CreateNews} options = {{unmountOnBlur:true}} />
        <Tab.Screen name="Profile" component={Profile} options= {{unmountOnBlur:true}}/>
      </Tab.Navigator>
        )
    }
  
};
const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    bottomTabStyleLight: {
      backgroundColor: "#EAEAEA",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });