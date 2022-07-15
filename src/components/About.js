import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        backgroundColor:"white",
        color:"black"
    });
    const [buttonName, setButtonName] = useState("Enable dark mode");

    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                backgroundColor:"white",
                color:"black"
            });
            setButtonName("Enable dark mode");
        }else{
            setMyStyle({
                backgroundColor:"black",
                color:"white",
                border:"1px solid white"
            });
            setButtonName("Disable dark mode");
        }
    }
    
    return (
        <>
        <div className="container" style={myStyle}>
        <h4 className='my-1'> About us </h4>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <button type="button" onClick={toggleStyle} className="btn btn-primary mb-3">{buttonName}</button>
        </div>
        </>
    );
}