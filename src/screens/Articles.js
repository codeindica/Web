import React from 'react'

import daily from '../assets/snaps/daily.png'

export default function Articles() {
  return (
    <div className="container mt-5 h-100 overflow-scroll pb-max">
      <div className="row p-5">
        <div className="col-lg-4 p-4 bg-white d-flex justify-content-center align-items-center">
          <img src={daily} alt="" className="img-fluid"/>
        </div>
        <div className="col-lg-8 lgr p-2">
            <h4 className="py-3 px-4 text-white">Why we built Dailymeal application?</h4>
            <h5 className="py-1 px-4 my-3 text-light">There is only one reason we built the Dailymeal application. The most important part of an individual's life is to eat food to remain healthy both in terms of physical and mental health. Dailymeal application is a simple daily meal planner which helps people to plan their breakfast,lunch and dinner with an average number of calories so that they know how much they are consuming and also to sort and plan what they are going to eat next rather than wasting time thinking about it daily.</h5>
            <h6><a className="py-1 px-4 text-white mt-4" href="https://github.com/codeindica/Dailymeal">Github Link</a></h6>
        </div>
      </div>
    </div>
  )
}
