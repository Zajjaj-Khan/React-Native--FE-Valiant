// import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import "@/global.css";
import Hello from "./navigation/Hello";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {NavigationContainer} from '@react-navigation/native'
import Auth_nav from "@/app/navigation/Auth_nav";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  console.log("RootLayout loaded twice")

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Auth_nav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
