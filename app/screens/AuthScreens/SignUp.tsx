import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link className="text-blue-800" href={"/forgot-password"}>
        Forgot password?
      </Link>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
