import { View, Text } from 'react-native'
import CategoryList from './screens/categoryList'
import FavoriteList from './screens/favoriteList'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { CategoryReducer } from './redux/categoryReducer'

const store = createStore(CategoryReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <CategoryList />
        <FavoriteList />
      </View>
    </Provider>
  )
}