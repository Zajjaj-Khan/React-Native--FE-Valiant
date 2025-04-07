import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Text>
        Or{" "}
        <Link className="text-blue-800" href={"/signup"}>
          Sign up
        </Link>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
