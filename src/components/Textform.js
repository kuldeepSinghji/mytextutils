import React,{useState} from 'react'
import Alert from './Alert';
import "./Textform.css"
export default function Textform(props) {
    const [text, setText] = useState("")
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase...","Sucess")
    }
    const handleLoCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase...","sucess")
    }
    const clearText = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Clear all the text..","sucess")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text has been copied..","sucess")
    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Remove All the Extra Spaces....","sucess")
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    return(
        <>
        <div style={props.mode} className="textformAlert">
        <Alert alert={props.alert}/>
        </div>
        <div className="textformContainer" style={props.mode}>
        <div className="textformInline">
            <h1 className="textformHeading">{props.heading}</h1>
            <textarea name="textarea" id="textarea" onChange={handleOnChange} value={text} cols="30" rows="10"></textarea>
            <div className="textformButtons">
            <button disabled={text.length === 0} onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} onClick={handleLoCase}>Convert to LowerCase</button>
            <button disabled={text.length === 0} onClick={clearText}>Clear Text</button>
            <button disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
        <div className="textformSummaryBox">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.split(/\s+/).join("").length} Characters.</p>
            <p className="wordCount">{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to Read.</p>
        </div>
        <div className="preview">
            <h2>Preview your text here..</h2>
            <hr/>
            <p>{text.length > 0 ? text:"Nothing to Show.."}</p>
        </div>
        </div>
        </div>
        </>
    )
}
