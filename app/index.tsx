import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import data from "@/constants/characters";
import { useNavigation } from "expo-router/build/useNavigation";
import { router } from "expo-router/build/imperative-api";
import { useCharacterContext } from "@/provider/CharacterProvider";
const Index = () => {
  const {character, setCharacter} = useCharacterContext()
  const getDynamicBackground = () => {
    return {
      backgroundColor: character.primary, // Replace this with actual color logic
    };
  };
  const getDynamicColor = () => {
    return {
      color: character.primary, // Replace this with actual color logic
    };
  };
  const handlePress=()=>{
    router.push("/chat")
  }
  return (
    <SafeAreaView className="h-full bg-background">
      <View className="mt-20 space-y-9 mx-7">
        <View className="justify-center items-center">
          <Text className={`text-3xl `} style={[getDynamicColor()]}>Hi There!!</Text>
        </View>
        <View className="justify-center items-center text-center mb-7">
          <Text className="text-3xl" style={[getDynamicColor()]}>I am</Text>
          <Text className="text-3xl" style={[getDynamicColor()]}>{character.fullname}</Text>
        </View>
        <View className="justify-center items-center mb-7">
          <Image
            source={character.dp}
            resizeMode="contain"
            className="w-[186px] h-[186px] rounded-full"
          />
        </View>
        <View className="flex-row space-x-7 items-center justify-center mb-3">
          {data.map((c,index) => (
            <TouchableOpacity style={c.name===character.name&&styles.active} onPress={()=>setCharacter(data[index])}>
              <Image
                source={c.logo}
                resizeMode="contain"
                className="w-16 h-16 rounded-full"
              />
            </TouchableOpacity>
          ))}
        </View>
        <View className="justify-center items-center space-y-2 mb-4">
          <Text className="text-lg text-slate-500">Welcome to <Text className="font-bold text-red-500">WeeBot</Text></Text>
          <Text className="text-md text-slate-900">Choose your talk buddy</Text>
        </View>
        <TouchableOpacity className={`px-12 py-4 rounded-lg`} style={[getDynamicBackground()]} onPress={handlePress}>
          <Text className="text-white text-center text-lg">Start Conversation</Text>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  active:{
    width: 80,          // Set the width of the element
    height: 80,         // Set the height of the element
    borderWidth: 7,      // Set the border width
    borderColor: '#FF8277',// Set the border color
    borderRadius: 50,    // Make the border circular
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Index;
