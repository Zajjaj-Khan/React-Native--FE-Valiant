import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ForgetPassword = () => {
  return (
    <View>
      <Text>ForgetPassword</Text>
      <Link className="text-blue-800" href={"/"}>
        Back to login
      </Link>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
