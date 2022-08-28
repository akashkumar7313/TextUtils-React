import React, { useState } from 'react'

export default function TextForm (props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handelClearClick = ()=>{
        let newText = "";
        setText(newText)
    }


    const [text, setText] = useState ("Enter text here...");
  return(
    <>
    <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-success mx-1"  onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger mx-1"  onClick={handelClearClick}>Clear Text</button>
    </div> 
    <div className="container my-3">
        <h2>Your text summary.</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>  
    
  )
}
