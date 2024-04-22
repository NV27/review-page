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
    
      <div className="flex ">
        <div>
          <h1>10,000+ of our users love our products.</h1>
          <p>We only provide great products combined with excellent customer service. See what satisfied customers are saying about our service.</p>
        </div>
        <div>
          <StarReviewBox stars="4"/>
          <StarReviewBox stars="2"/>
          <StarReviewBox stars="1"/>
        </div>
      </div>

      <div className="text-reviews flex justify-evenly mt-[300px]">
        <WordReviewBox/>
        <WordReviewBox/>
        <WordReviewBox/>
      </div>
    </>
  )
}

export default App
