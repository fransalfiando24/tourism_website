import React, {useEffect} from 'react'
import './css/AboutComponent.css'
import ViewImage from '../image/view2.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

function AboutComponent() {
    useEffect(() => {
        AOS.init({
            // once: true,
        });
    })
    return (
        <div className="view">
            <div className="viewText">
                <img src={ViewImage} data-aos="fade-up" data-aos-duration="1200"/>
                <div className="textView">
                    <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100"><h1>PUNCAK LAWANG</h1></div> 
                    <p data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200"> Negeri diatas awan yang menghadirkan pemandangan yang mengesankan dan mengagumkan. <br/><br/>
                    Dengan pandangan melihat perbukitan dan indahnya danau maninjau. Dapat menikmati Sunset dan Sunrise dengan nikmat dan tenang</p><br/>
                    <p style={{color:"green"}}>READ MORE</p>
                    </div>
            </div>
        </div>
    )
}

export default AboutComponent
