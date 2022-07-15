import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const copyToClipboard = () => {
        var temp = document.getElementById("myBox");
        temp.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode==='light'?'#042743':'white'}}>
        <div className="mb-3">
            <h4>{props.heading}</h4>
            <textarea className="form-control" id="myBox" style={{
                backgroundColor: props.mode==='light'?'white':'grey',
                color: props.mode==='light'?'#042743':'white'
            }} rows="3" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy to Clipboard</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <div className="my-3"> 
            <h4> Your text summary </h4>
            <p> {text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters </p>
            <p> {(text.length>0 ? text.trim().split(" ").length : 0)*0.008} minutes read</p>
        </div>
        </div>
        </>
    );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Enter your text here"
}