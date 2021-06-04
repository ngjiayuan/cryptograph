import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/";

//font imports
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useRobotoMono,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";

//initialise firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwTcKUukg-4vrLOt-1Bc9517xV2pOaj0g",
  authDomain: "cryptograph-506da.firebaseapp.com",
  projectId: "cryptograph-506da",
  storageBucket: "cryptograph-506da.appspot.com",
  messagingSenderId: "318832230017",
  appId: "1:318832230017:web:0bd1cb6bca5a774a949780",
  measurementId: "G-5FX3FK0XCT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // initialise fonts
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
  });
  const [robotoMonoLoaded] = useRobotoMono({
    RobotoMono_400Regular,
  });
  if (!robotoLoaded || !poppinsLoaded || !robotoMonoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
