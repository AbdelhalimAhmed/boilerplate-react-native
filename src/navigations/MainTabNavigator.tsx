import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CountProvider } from '../contexts/count-context'
import { UserProvider } from '../contexts/user-context'
import { CalendarProvider } from '../contexts/calendar-context'

import Example from "../containers/example/example";
import Profile from "../containers/profile/user-profile";

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={({ route }) => {
        return {
          // headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`
          headerTitle: 'profile'
        };
      }}
    />
  </ProfileStack.Navigator>
);

const CreateNewPlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <CountProvider>
    <UserProvider>
      <CalendarProvider>
        <AppTabs.Navigator>
          <AppTabs.Screen
            name="Example"
            component={Example}
            options={{
              tabBarIcon: props => (
                <Ionicons
                  name="ios-checkmark-circle-outline"
                  size={props.size}
                  color={props.color}
                />
              )
            }}
          />
          <AppTabs.Screen
            name="Create"
            component={CreateNewPlaceholder}
            options={{
              tabBarIcon: props => (
                <Ionicons name="ios-add" size={props.size} color={props.color} />
              )
            }}
            listeners={({ navigation }) => ({
              tabPress: event => {
                event.preventDefault();
                navigation.navigate("CreateNew");
              }
            })}
          />
          <AppTabs.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarIcon: props => (
                <Ionicons name="ios-contacts" size={props.size} color={props.color} />
              )
            }}
          />


        </AppTabs.Navigator>
      </CalendarProvider>
    </UserProvider>
  </CountProvider>
);

export default AppTabsScreen