import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, settext] = useState('');

    const handleUpClick = () => {
        let uppercasetext = text.toUpperCase();
        settext(uppercasetext);
        props.showAlert('Changed to uppercase', 'success');
    };

    const handleLowClick = () => {
        let lowercasetext = text.toLowerCase();
        settext(lowercasetext);
        props.showAlert('Changed to lowercase', 'success');
    };

    const handleClearText = () => {
        settext('');
        props.showAlert('All text cleared', 'success');
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard', 'success');
    };

    const handleOnChange = (event) => {
        settext(event.target.value);
    };

    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText} >Copy text</button>
        </div>
        <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Text Summary:</h1>
            <p>Words = {text.split(" ").length} , Characters = {text.length}</p>
            <p>Time to read = {text.split(" ").length /125} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
