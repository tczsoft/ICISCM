import React from 'react'
import Statisticsconference from '../../Shared/Components/Conferencestatistics.jsx/Statisticsconference'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

function Statisticspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Statistics- International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/conference-statistics'} />
      <Statisticsconference />
    </div>
  )
}

export default Statisticspage