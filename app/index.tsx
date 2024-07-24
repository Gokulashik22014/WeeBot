import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import data from "@/constants/characters";
const Index = () => {
  const [character, setCharacter] = useState(data[0]);
  const getDynamicBackground = () => {
    return {
      backgroundColor: character.name + "primary", // Replace this with actual color logic
    };
  };
  const getDynamicColor = () => {
    return {
      color: character.name + "primary", // Replace this with actual color logic
    };
  };
  return (
    <SafeAreaView className="h-full bg-background">
      <View className="mt-20 space-y-9 mx-7">
        <View className="justify-center items-center">
          <Text className={`text-3xl `}>Hi There!!</Text>
        </View>
        <View className="justify-center items-center text-center mb-7">
          <Text className="text-3xl">I am</Text>
          <Text className="text-3xl">{character.fullname}</Text>
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
        <TouchableOpacity className={`px-12 py-4 rounded-lg bg-${getDynamicBackground()}`} >
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
