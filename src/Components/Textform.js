import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked", text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked", text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCopy = ()=>{
        let copyText = document.getElementById("mybox")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    } 

    const handleColor = ()=>{
        // console.log("UpperCase was clicked", text);
        let newColor = text.getElementById("mybox");
        setText(newColor)
    }

    const [text, setText] = useState("")
    // text = "new text"    //wrong way to update the text
    // setText("new Text")  // correct way to update the text
    return (
        <>
        <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} style={{backgroundColor: props.mode==='dark'?'#4c84d7':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-0" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-0" onClick={handleColor}>Change Color</button>
        </div>

        <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minuts to read</p>
            <h3>Preview</h3>
            <p>{text.length>0? text: "Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
