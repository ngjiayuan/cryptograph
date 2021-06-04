import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../features/authentication/screens/login.screen";

const Stack = createStackNavigator();

export function AuthenticationNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={LoginScreen} />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Register Screen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
}
