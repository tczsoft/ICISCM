import React from 'react'
import Publication from '../../Shared/Components/Publication/Publication'
import HelmetComponent from '../HelmetComponent/HelmetComponent'


function PublicationPage() {
    return (
        <>
            <HelmetComponent title={'Key Dates - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/key-dates'} />
            <Publication />
        </>
    )
}

export default PublicationPage
  