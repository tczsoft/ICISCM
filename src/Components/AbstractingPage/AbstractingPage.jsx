import React from 'react'
import Abstracting from '../../Shared/Components/Abstracting/Abstracting'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

function AbstractingPage() {
    return (
        <>
            <HelmetComponent title={'Paper Submission - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/paper-submission'} />
            <Abstracting />
        </>
    )
}

export default AbstractingPage
