import React from 'react'
import Contact from '../../Shared/Components/Contact/Contact'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

function ContactPage() {
    return (
        <>
            <HelmetComponent title={'Contact us - International Conference on Intelligent Systems and Computational Methods'} canonical={'https://iciscm.com/contact'} />
            <Contact />
        </>
    )
}

export default ContactPage
