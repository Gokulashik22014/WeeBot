import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useCharacterContext } from "@/provider/CharacterProvider";
import axios from "axios";
type User = {
  _id: number;
  name: string;
  avatar: string;
};

type Message = {
  _id: number;
  text: string;
  createdAt: Date;
  user: User;
};
const chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { character } = useCharacterContext();
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello I am " + character.fullname,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: character.dp,
        },
      },
    ]);
  }, []);
  const getResponse = async (message) => {
    try {
      setLoading(true)
      const result = await axios.post("http://192.168.9.28:3000/api/chat", {
        message: message,
        desc: character.desc,
      });
      if (result.data.success) {
        const chatResponse = {
          _id: Math.random() * 999,
          text: result.data.message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: character.dp,
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatResponse)
        );
      }
      setLoading(false)
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  //handele send function
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    if (messages[0].text) {
      getResponse(messages[0].text);
    }
  }, []);
  return (
    <SafeAreaView className="h-full bg-background">
      <GiftedChat
        messages={messages}
        isTyping={loading}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default chat;
