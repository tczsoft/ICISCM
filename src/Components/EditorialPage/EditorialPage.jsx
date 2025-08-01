import React from 'react'
import EditorialBoard from '../../Shared/Components/EditorialBoard/EditorialBoard'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

function EditorialPage() {
    return (
        <>
            <HelmetComponent title={'Organizing Committee - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/organizing-committee'} />
            <EditorialBoard />
        </>
    )
}

export default EditorialPage
