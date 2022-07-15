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

    const handleClear = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode==='light'?'#042743':'white'}}>
        <div className="mb-3">
            <h4 className="mb-4">{props.heading}</h4>
            <textarea className="form-control" id="myBox" style={{
                backgroundColor: props.mode==='light'?'white':'#13466e',
                color: props.mode==='light'?'#042743':'white'
            }} rows="3" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to Clipboard</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
        
        <div className="my-3"> 
            <h4> Your text summary </h4>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p> {(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minutes read</p>
        </div>

        <div className="my-3"> 
            <h4> Preview </h4>
            {text.length===0?"Nothing to preview":text}
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