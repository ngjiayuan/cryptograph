import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";

export const AuthSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.ui.grey};
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.l};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  height: 50px;
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.ui.white};
  border-radius: ${(props) => props.theme.sizes.xxs};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-family: ${(props) => props.theme.fonts.roboto};
`;

export const AuthButton = styled(TouchableOpacity)`
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.ui.pink};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.poppins};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

export const AuthView = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  align-items: center;
  padding: ${(props) => props.theme.spacing.ml};
`;

export const ButtonView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;
