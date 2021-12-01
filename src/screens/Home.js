import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner';
import Header from '../components/Header';
import Articles from './Articles';
import Fundamental from './Fundamental';



export default function Home() {
  const value = useSelector(state=>state.linkValue) || 0;
  return (
    <div className="overflow-hidden vh-100">
      <Header/>
        {value === 1 ?
        <h1>Test</h1>: null}
        {value === 0 ? <Banner/> : null}
        {value === 2 ? <Fundamental/> : null}
        {value === 3 ? <Articles/> : null}
    </div>
  )
}
