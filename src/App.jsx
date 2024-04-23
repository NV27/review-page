import { useState } from 'react'
import './App.css'
import StarReviewBox from './StarReviewBox/StarReviewBox'
import WordReviewBox from './WordReviewBox/WordReviewBox'

function App() {
  return (
    <>
      <div className="flex justify-between ">
        <div className='w-[50%]'>
          <h1 className="m-[20px] text-left">10,000+ of our users love our products.</h1>
          <p className="m-[20px] text-left">We only provide great products combined with excellent customer service. See what satisfied customers are saying about our service.</p>
        </div>
        <div className="m-[20px]">
          <StarReviewBox stars="4" stagger="0" name="Reviews"/>
          <StarReviewBox stars="2" stagger="2" name="Report Guru"/>
          <StarReviewBox stars="1" stagger="4" name="Best Tech"/>
        </div>
      </div>

      <div className="text-reviews flex justify-evenly mt-[150px] gap-[20px]">
        <WordReviewBox stagger = "0" name="Colin" words='"This product is really good - consider this customer serviced!"'/>
        <WordReviewBox stagger = "2" name="Sandra" words='"I get £10 back if I write a review"'/>
        <WordReviewBox stagger = "4" name="Mr. Banana" words='"The product removed my legs, which is actually what I wanted, but they should really put that on the box"'/>
      </div>
    </>
  )
}

export default App
