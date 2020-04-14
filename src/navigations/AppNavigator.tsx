import React from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabsScreen from './MainTabNavigator'
import AuthStackScreen from './AuthNavigator'

import { Counter } from '../components'
import Example from "../containers/example/example";

const CreateNew = () => <View style={{ flex: 1, backgroundColor: "red" }} />;
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 1000);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}><ActivityIndicator /></View>} />
      ) : user ? (
        <RootStack.Screen name="Tabs" component={AppTabsScreen} />
      ) : (
            <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
          )}
      <RootStack.Screen
        name="CreateNew"
        component={CreateNew}
        options={{ animationEnabled: true }}
      />
      <RootStack.Screen
        name="Modal"
        component={Example}
        options={{ animationEnabled: true }}
      />
      <RootStack.Screen
        name="Alert"
        component={Counter}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1]
                })
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp"
                })
              }
            };
          }
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};