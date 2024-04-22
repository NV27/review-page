import { useState } from 'react'
import './App.css'
import StarReviewBox from './StarReviewBox/StarReviewBox'
import WordReviewBox from './WordReviewBox/WordReviewBox'

function App() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    </head>
    
      <div className="flex justify-between ">
        <div className='w-[700px]'>
          <h1 className="m-[20px]">10,000+ of our users love our products.</h1>
          <p >We only provide great products combined with excellent customer service. See what satisfied customers are saying about our service.</p>
        </div>
        <div className="m-[20px]">
          <StarReviewBox stars="4"/>
          <StarReviewBox stars="2"/>
          <StarReviewBox stars="1"/>
        </div>
      </div>

      <div className="text-reviews flex justify-evenly mt-[300px]">
        <WordReviewBox name="Colin"/>
        <WordReviewBox name="Sandra"/>
        <WordReviewBox name="Mr. Banana"/>
      </div>
    </>
  )
}

export default App
