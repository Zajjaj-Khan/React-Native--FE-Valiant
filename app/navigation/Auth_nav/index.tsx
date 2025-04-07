import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/app/screens/AuthScreens/Login";
import SignUp from "@/app/screens/AuthScreens/SignUp";
import ForgetPassword from "@/app/screens/AuthScreens/ForgetPassword";
const Stack = createNativeStackNavigator();
const index = React.memo(() => {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }}
      name="Login"
      component={Login}
      />
      <Stack.Screen options={{ headerShown:false}}
      name="SignUp"
      component={SignUp}
      />
      <Stack.Screen options={{ headerShown:false }}
      name="ForgetPassword"
      component={ForgetPassword}
      />
    </Stack>
  );
});

export default index;

const styles = StyleSheet.create({});
