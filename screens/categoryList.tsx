import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const data = [
    {
        id: 1,
        name: 'Futbol'
    },
    {
        id: 2,
        name: 'Basketbol'
    },
    {
        id:3,
        name: 'Voleybol'
    },
    {
        id: 4,
        name: 'Beyzbol'
    }
]

export default function CategoryList() {

    let dispatch = useDispatch();

    const addToFavorite = (item: any) => {
        dispatch({type: 'FAVORITE', payload: item})
        console.log('Elave edildi')
    }

    const renderItem = ({item}: any) => {
        return (
            <Pressable onPress={() => addToFavorite(item)}>
                <Text style={{color: 'white', fontSize: 18, marginBottom: 12}}>{item.name}</Text>
            </Pressable>
        )
    }

  return (
    <View>
      <Text style={{backgroundColor: 'black', fontSize: 24, color: 'white', textAlign: 'center', paddingTop: 40}}>Category List</Text>

        <FlatList 
            data={data}
            renderItem={renderItem}
            style={{backgroundColor: 'black'}}
        />
    </View>
  )
}