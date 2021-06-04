import React, { useState, useContext } from "react";
import { Text } from "react-native";
import {
  AuthSafeArea,
  AuthInput,
  AuthButton,
  AuthView,
  ButtonView,
  Title,
} from "../components/authentication.components";
import { Spacer } from "../../../components/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <>
      <AuthSafeArea>
        <Title>cryptograph</Title>
        <AuthView>
          <AuthInput
            placeholder="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer />
          <AuthInput
            placeholder="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <Spacer />
          <AuthInput
            placeholder="Re-enter Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
          <Spacer />
          {error && <Text>{error}</Text>}
          <ButtonView>
            <AuthButton
              onPress={() => {
                onRegister(email, password, repeatedPassword);
                navigation.navigate("LoginScreen");
              }}
            >
              <Text>Register</Text>
            </AuthButton>
          </ButtonView>
        </AuthView>
      </AuthSafeArea>
    </>
  );
}
