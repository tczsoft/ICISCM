import React from 'react'
import PeerReview from '../../Shared/Components/Peer-Review/PeerReview'

function PeerPage() {
    return (
        <>
            <HelmetComponent title={'Conference Tracks - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/conference-tracks'} />
            <PeerReview />
        </>
    )
}

export default PeerPage
