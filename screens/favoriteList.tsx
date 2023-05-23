import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FavoriteList() {

  let data: any = useSelector(state => state)
  console.log('data', data)
  const dispatch = useDispatch()

  const deleteFavorite = (id: number) => {
      dispatch({type: 'DELETE', payload: id})
  }


  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => deleteFavorite(item.id)}>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 12 }}>{item.name}</Text>
      </Pressable>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ backgroundColor: 'black', fontSize: 24, color: 'white', textAlign: 'center', paddingTop: 40 }}>Favorite List</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        style={{ backgroundColor: 'black' }}
      />
    </View>
  )
}