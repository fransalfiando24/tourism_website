import React, {useState} from 'react'
import './css/CommentsComponent.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function CommentsComponent() {
    const commentar = [
        {
            id: 1,
            comment : "Saya sangat senang berkunjung kesini, pemandangan nya sangat indah, fasilitasnya sangat bagus. Pengalaman terbaik dalam hidup saya.",
            person : "Fran's Alfiando, Germany"
        },
        {
            id:2,
            comment : "It's Very Fun. I think this is awesome. You should visit this place at least once on your life.",
            person : "Alfi Frank, Spain"
        },
        {
            id:3,
            comment : "Objek wisata yang sangat indah. Mempunyai daya tarik tersendiri.",
            person : "Dinda, Indonesia"
        }
    ]

    // const [comment, setComment] = useState(commentar.comment1);
    // const [person, setPerson] = useState(commentar.person1);

    return (
        <div className="comments">
            <div className="commentsContainer">
                <Splide options ={{
                    arrows:false,
                    perMove: 1,
                    height: '10rem',
                    autoplay: true,
                    interval: 3500,
                    type: 'loop',
                    speed: 2200,
                    breakpoints: {
                        800: { perPage: 1, width: '20rem', height:'17rem', gap:'2rem'},
                    },
                }}>
                    {commentar.map((item) =>(
                        <SplideSlide key={item.id}>
                            <p className="comment">{item.comment}</p>
                            <p className="person">- {item.person}</p>
                        </SplideSlide>
                    ))}

                </Splide>

                {/* <p className="comment">{comment}</p>
                <p className="person">- {person}</p>
                <div className="navigator">
                    <div className="circle" onClick={() => { setComment(commentar.comment1); setPerson(commentar.person1)}}></div>
                    <div className="circle" onClick={() => { setComment(commentar.comment2); setPerson(commentar.person2)}}></div>
                    <div className="circle" onClick={() => { setComment(commentar.comment3); setPerson(commentar.person3)}}></div>
                </div> */}
            </div>
        </div>
    )
}

export default CommentsComponent

