import React from 'react'

import daily from '../assets/snaps/daily.png'

export default function Articles() {
  return (
    <div className="container mt-5 h-100 overflow-scroll pb-max">
      <div className="row p-5">
        <div className="col-lg-4 p-4 bg-white d-flex justify-content-center align-items-center">
          <img src={daily} alt="" className="img-fluid"/>
        </div>
        <div className="col-lg-8 bg-white p-2">
            <h3 className="py-3 px-4 text-success">Why we build Dailymeal application?</h3>
            <h5 className="py-1 px-4">There is only one reason we build Dailymeal application. The most important of an individual's life is to eat food to remain healthy and sharp both in terms of physical and mental terms. Daily meal is a simple daily meal planner which helps people to plan their daily breakfast, lunch and dinner with number of calories so that they know how much they are consuming and also to sort what they are going to eat rather than wasting time thinking about it daily.</h5>
            <a className="py-1 px-4" href="https://github.com/codeindica/Dailymeal">Github Link</a>
        </div>
      </div>
    </div>
  )
}
