import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './HelmetComponent/HelmetComponent'

function Abouts() {
  return (
    <>
      <HelmetComponent title={'About us - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/about'} />
      <About />
    </>
  )
}

export default Abouts