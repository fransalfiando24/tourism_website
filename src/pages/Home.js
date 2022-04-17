import MainComponent from '../components/MainComponent';
import NavbarComponent from '../components/NavbarComponent';
import ViewComponent from '../components/ViewComponent';
import AboutComponent from '../components/AboutComponent';
import ParaglidingComponent from '../components/ParaglidingComponent';
import CommentsComponent from '../components/CommentsComponent';
import ContactComponent from '../components/ContactComponent';
import React from 'react'

function Home() {
    return (
        <div>
            <MainComponent/>
            <AboutComponent/>
            <ViewComponent/>
            <ParaglidingComponent/>
            <CommentsComponent/>
            <ContactComponent/>
        </div>
    )
}

export default Home
