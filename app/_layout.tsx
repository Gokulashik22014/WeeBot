import { View, Text } from "react-native";
import { Stack } from "expo-router/stack";
import React from "react";
import CharacterProvider from "@/provider/CharacterProvider";

const MainLayout = () => {
  return (
    <CharacterProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{ headerTitle: "WeeBot" }} />
      </Stack>
    </CharacterProvider>
  );
};

export default MainLayout;
