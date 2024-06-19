import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { ThemeProvider } from "styled-components/native";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "../styles/theme";


SplashScreen.preventAutoHideAsync();

const App = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar style="dark" backgroundColor="transparent" translucent />
            <View
                onLayout={onLayoutRootView}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.COLORS.BLUE1
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontFamily: 'DMSans_400Regular',
                        color: COLORS.COLORS.WHITE,
                    }}
                >
                    Fechamento Caixa APP
                </Text>
            </View>
        </ThemeProvider>
    );
};

export default App;