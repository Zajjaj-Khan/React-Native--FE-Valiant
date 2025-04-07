import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/App/Home";
const Stack = createNativeStackNavigator();
const index = React.memo(() => {
  
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
});

export default index;

const styles = StyleSheet.create({});
