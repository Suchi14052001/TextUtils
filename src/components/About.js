import React from 'react'

export default function About(props) {
    
    let myStyle = {
        color: (props.mode === 'light')? 'black': "white",
        backgroundColor: props.mode === 'light' ? "white" : "rgb(36, 74, 104)"
    };

    return (
        <>
        <div className="container">
        <h4 className='my-1' style={{color:(props.mode === 'light')? 'black': "white"}}> About us </h4>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse your text</strong>
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        TextUtils is a single page application which helps you analyse your text efficiently. It provides features such as word count, character count, trim spaces. Dark mode of the app is also available
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                   <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextUtils is a free tool that provides instant word and character statistics for given text. This is suitable for writing text with word or character limit
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" style={myStyle} className="accordion-collapse collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This tool works in any browser like chrome, Firefox, Internet Explorer, Safari and Opera
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}