import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useCharacterContext } from '@/provider/CharacterProvider';
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
  const [messages,setMessages]=useState<IMessage[]>([])
  const {character}=useCharacterContext()
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: character.dp,
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])
  return (
    <SafeAreaView className='h-full bg-background'>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </SafeAreaView>
  )
}

export default chat