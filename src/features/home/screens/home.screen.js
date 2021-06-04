import React from "react";
import { Button, Text } from "react-native";
import { SafeArea } from "../../../components/safearea";

export function HomeScreen({ navigation }) {
  return (
    <>
      <SafeArea>
        <Text>Home Screen Placeholder</Text>
        <Button onPress={() => navigation.navigate("Adding")} title="+" />
      </SafeArea>
    </>
  );
}
