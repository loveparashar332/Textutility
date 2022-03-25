// import { useState } from "react"
import React,{ useState }from 'react'

export default function TextChange(props) {
    const [text,setText] = useState("");
    const handleClick1=()=>{
        if(text==="")return;
        let newText = text.toUpperCase();
           setText(newText);
           props.showAlert("Upper Case Happend","success");
    }
    const handleupClick=(event)=>{
          setText(event.target.value);
    }
    const handleClick2 = ()=>{
        if(text==="")return;
        setText("");
     
        props.showAlert("Text Deleted","danger");
    }
    const handleClick3=()=>{
        if(text==="")return;
        let newtext=text.replace(/\s+/g, ' ').trim();
        setText(newtext);

        props.showAlert("Extra Spaces Deleted","warning");
     
    }
    const handleClick4 = ()=>{
        // if(text==="")return;
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    
    }

  return (
   <>
    <div className="mb-3">
                <div className="mb-3">
                    <h1 className={`text-${props.colors==='light'?'black':'white'}`}>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleupClick} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${(props.colors==='blue')?'danger':'success'} mx-3`} onClick={handleClick1}>Convert Uppercase</button>
            <button className={`btn btn-${(props.colors==='red')?'primary':'danger'} mx-3`} onClick={handleClick2}>Delete Text</button>
            <button className={`btn btn-${(props.colors==='green')?'primary':'success'} mx-3`} onClick={handleClick3}>Remove extra Spaces</button>
            <button className={`btn btn-${(props.colors==='green')?'danger':'success'} mx-3`} onClick={handleClick4}>Copy Text</button>
    </div>
        <div className="container">
             <h2 className={`text-${props.colors==='light'?'black':'white'}`}>Summary about Text</h2>
             <p className={`text-${props.colors==='light'?'black':'white'}`}>{(text.charAt(text.length-1)===" " || text==="")?text.split(" ").length-1:text.split(" ").length} Words , {text.length} Characters</p>
             <h5 className={`text-${props.colors==='light'?'black':'white'}`}>Time taken to read this text is , {text.split(" ").length * 0.008} minute</h5>
             <h3 className={`text-${props.colors==='light'?'black':'white'}`}>
                 Preview
             </h3>
             <p className={`text-${props.colors==='light'?'black':'white'}`}>{text}</p>
        </div>
   </>
  )
}


