import React, {useRef, useEffect } from 'react'
import './css/MainComponent.css'
import {TweenMax, Power3, Expo} from 'gsap'

function MainComponent() {
    useEffect(() => {
        TweenMax.from(
            ".mainTitle p.title",
            2,
            {
                opacity: 0,
                ease: Expo.easeInOut
            }, 0.5
        )

        TweenMax.from(
            ".mainTitle p.p1",
            2,
            {
                delay: 1,
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut
            }, 0.5
        )

        TweenMax.from(
            ".mainTitle p.p2",
            2,
            {
                delay: 1.3,
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut
            }, 0.5
        )
        
        TweenMax.from(
            ".mainTitle button",
            1.7,
            {
                delay: 1.5,
                opacity: 0,
                ease: Expo.easeIn
            }, 0.5
        )
    })
    return (
        <div className="main">
            <div className="mainTitle">
                <p className="title">SOUL</p>
                <p className="p1">PUNCAK LAWANG</p>
                <p className="p2">PARK & RESORT</p>
                <button className="btn-read">READ MORE</button>
            </div>
        </div>
    )
}


export default MainComponent
