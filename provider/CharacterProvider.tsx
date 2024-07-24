import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import data from '@/constants/characters'


const CharacterContext=createContext<any>({})
export const useCharacterContext=()=> useContext(CharacterContext);
const CharacterProvider = ({children}:{children:any}) => {
    const [character,setCharacter]=useState(data[0]);
  return (
    <CharacterContext.Provider value={{character,setCharacter}}>
        {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider