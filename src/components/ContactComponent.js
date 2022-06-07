import React from 'react'
import './css/ContactComponent.css'
import { AiOutlineInstagram , AiOutlineTwitter} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';


function ContactComponent() {
    return (
        <div className="contact">
            <div className="contactContainer">
                <div className="follow">
                    <h3>Follow Us</h3><br/>
                    <AiOutlineInstagram className="icon"/>
                    <FaFacebookF className="icon"/>
                    <AiOutlineTwitter className="icon"/><br/>
                    <p>2021 Puncak Lawang <br/>
                    Website by Frans Alfiando</p>
                </div>
                <div className="address">
                    <div>
                        <h3>Our Address</h3>
                        Jl. Puncak Lawang, Kecamatan Matur, Kabupaten Agam<br/>
                        Sumatera Barat<br/>
                        Indonesia<br/>
                    </div>
                    <div>
                        Mobile: +62 888 8888888 <br/>
                        Phone: +62 888 8888888<br/>
                        Fax: +62 888 8888888<br/>
                        Email: puncaklawang@resort.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
