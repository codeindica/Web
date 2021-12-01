import React from 'react'
import { quotes } from '../dataSource/quotes'

function Banner() {
  const shuffled = quotes.sort(() => 0.5 - Math.random());
  const randomArr = shuffled.slice(0, 1);
  return (
    <section className="banner p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-left text-center px-4 display-5 mb-5">We build and design React / React Native projects.</h1>
        <div className="quotes">
          {randomArr.map(item=>
            <div className="bg-white p-5 w-100 fixed-bottom">
              <h4 className="text-center text-dark">{item.text}</h4>
            </div>)}
        </div>
    </section>
  )
}

export default Banner
