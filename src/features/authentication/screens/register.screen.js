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

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

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
          <AuthInput
            placeholder="re-enter password"
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
              onPress={() => navigation.goBack()}
              color="black"
              icon="arrow-left"
              labelStyle={{
                fontFamily: "Poppins_400Regular",
              }}
              uppercase={false}
            >
              back
            </AuthButton>
            <AuthButton
              onPress={() => {
                onRegister(email, password, repeatedPassword);
                navigation.navigate("LoginScreen");
              }}
              color="black"
              icon="email-outline"
              labelStyle={{
                fontFamily: "Poppins_400Regular",
              }}
              uppercase={false}
            >
              register
            </AuthButton>
          </ButtonView>
        </AuthView>
      </AuthSafeArea>
    </>
  );
}
