import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../containers/signin/signin";
import Signup from "../containers/signup/signup";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signin" component={Signin} />
    <AuthStack.Screen name="Signup" component={Signup} />
  </AuthStack.Navigator>
);

export default AuthStackScreen