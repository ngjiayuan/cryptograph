import React, { useState, useContext } from "react";
import { Text } from "react-native";
import {
  AuthSafeArea,
  AuthInput,
  AuthButton,
  AuthView,
  ButtonView,
  Title,
  Logo,
  LogoView,
} from "../components/authentication.components";
import { Spacer } from "../../../components/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <>
      <AuthSafeArea>
        <LogoView>
          <Logo source={require("../../../../assets/polygon.png")} />
          <Title>cryptograph</Title>
        </LogoView>
        <AuthView>
          <AuthInput
            placeholder="e-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer />
          <AuthInput
            placeholder="password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <Spacer />
          {error && <Text>{error}</Text>}
          <ButtonView>
            <AuthButton
              onPress={() => navigation.navigate("RegisterScreen")}
              color="black"
              icon="email-outline"
              labelStyle={{
                fontFamily: "Poppins_400Regular",
              }}
              uppercase={false}
            >
              register
            </AuthButton>
            <AuthButton
              onPress={() => onLogin(email, password)}
              color="black"
              icon="key"
              labelStyle={{
                fontFamily: "Poppins_400Regular",
              }}
              uppercase={false}
            >
              login
            </AuthButton>
          </ButtonView>
        </AuthView>
      </AuthSafeArea>
    </>
  );
}
