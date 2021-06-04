import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { SafeArea } from "../../../components/safearea";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export function SettingsScreen() {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <>
      <SafeArea>
        <Text>Settings Screen Placeholder</Text>
        <Button title="Logout" onPress={onLogout} />
      </SafeArea>
    </>
  );
}
