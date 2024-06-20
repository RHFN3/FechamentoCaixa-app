import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View, Text } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "../styles/theme";

import { SignUp } from '../screens/SignUp';


SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
    const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
       
        await Font.loadAsync({
            Poppins_300Light,
            Poppins_400Regular,
            Poppins_500Medium,
            Poppins_700Bold,
            Poppins_800ExtraBold,
            DMSans_400Regular,
            DMSerifDisplay_400Regular,
        });
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
     
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    return (
        <GestureHandlerRootView>
        <ThemeProvider theme={COLORS}>
            <StatusBar style="dark" backgroundColor="transparent" translucent />
            <View onLayout={onLayoutRootView}>
                <SignUp />
            </View>
        </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default App;