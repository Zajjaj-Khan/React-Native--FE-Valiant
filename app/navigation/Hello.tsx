import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth_nav from "./Auth_nav";
import App_nav from "./App_nav";

const Hello = () => {
  // const [auth, setAuth] = useState<boolean>(false);
  console.log("Rendering NavigationContainer");
  return (
    <NavigationContainer>
    <Auth_nav/>
  </NavigationContainer>
  );
};

export default Hello;

const styles = StyleSheet.create({});
