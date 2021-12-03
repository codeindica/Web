import React,{useState} from 'react'
import Accordion from '../components/Accordion'
import { ReduxBasics } from '../dataSource/data'

export default function Fundamental() {
  const[id,setId]=useState(null);
  return (
    <div className="container mt-5 pb-max h-100 overflow-scroll">
      <div className="container">
        <h4 className="text-white my-4">Redux Fundamental Questions:</h4>
        {ReduxBasics.map(item=>
            <Accordion id={item.id} question={item.question} answer={item.answer} onClick={()=> setId(item.id)} show={item.id === id}/>
        )}
      </div>
    </div>
  )
}
