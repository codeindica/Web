import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import store from './redux/store'
import Home from './screens/Home'

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}