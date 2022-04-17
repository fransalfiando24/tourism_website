import React,  {useEffect} from 'react'
import './css/ViewComponent.css'
import s1 from '../image/s1.jpg'
import s2 from '../image/s2.jpg'
import s3 from '../image/s3.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";


function ViewComponent() {
    useEffect(() => {
        AOS.init({
            // once: true,
        });
    })
    return (
        <div className="secondImage" >
            <div className="secondText">
                <h1>GALLERY</h1>
                <p>Pemandangan alam yang indah menjadikan Puncak Lawang sebagai objek wisata yang instagramable.<br/> Beberapa foto terbaik yang didapatkan pada objek wisata Puncak Lawang.</p>
            </div>
            <div className="imageContainer" >
                <img src={s1} alt="" data-aos="fade-down" data-aos-duration="1200"/>
                <img src={s2} alt="" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100" className='mt-100'/>
                <img src={s3} alt="" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200" className='mt-200'/>
            </div>
        </div>
    )
}

export default ViewComponent
