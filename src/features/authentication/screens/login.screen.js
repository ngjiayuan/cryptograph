import React from "react";
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

export function LoginScreen() {
  return (
    <>
      <AuthSafeArea>
        <Title>cryptograph</Title>
        <AuthView>
          <AuthInput placeholder="Email" />
          <Spacer />
          <AuthInput placeholder="Password" />
          <Spacer />
          <ButtonView>
            <AuthButton>
              <Text>Login</Text>
            </AuthButton>
            <AuthButton>
              <Text>Register</Text>
            </AuthButton>
          </ButtonView>
        </AuthView>
      </AuthSafeArea>
    </>
  );
}
