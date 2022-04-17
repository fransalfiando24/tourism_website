import React from 'react'
import './css/ParaglidingComponent.css'

function ParaglidingComponent() {
    return (
        <div className="paragliding">
            <div className="paraglidingText">
                <div className="textParagliding">
                    <h1>PARAGLIDING</h1>
                    <p> Merupakan olahraga terfavorit di Puncak Lawang. <br/><br/>
                    Dengan ketinggian +- 5000m dpl dan pemandangan Danau Maninjau yang indah, membuat olahraga Paragliding sangat diminati di Puncak Lawang</p><br/>
                    {/* <p style={{color:"green"}}>READ MORE</p> */}
                </div>
            </div>
        </div>
    )
}

export default ParaglidingComponent