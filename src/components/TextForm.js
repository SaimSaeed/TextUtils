import React,{useState} from "react";

export default function TextForm(props){
  
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Has Been Cleared","success");
    }
    const handleonChange= (event)=>{
        console.log("on Change")
setText(event.target.value);
    }
    const handleCopy=()=>{
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text is Copied","success");
    }
    const handleExtraSpaces= ()=>{
        let text1 =text.trim().split('  ').filter(word=>word!=='');
        setText(text1.join(' '));
        props.showAlert("Extra Spaces are Removed","success");
    }
    const [text,setText] = useState("");
    return(
<>
<div className="container">
<h2  style={{color:props.mode==="light"? "#042743":"white"}}>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text}  style={{backgroundColor:props.mode==="light"? "white":"grey",color:props.mode==="light"? "#042743":"white"}}  onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==="light"? "#042743":"white"}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0? text:"Enter Your Text to Preview it Here"}</p>




</div>



</>
    );
}