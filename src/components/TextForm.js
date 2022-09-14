import React, {useState} from 'react'

const WordCharCount = ({text}) => {
    let charsCount = text.length;
    let wordsCount = 0;
    const textArr = text.split(' ')

    textArr.forEach(element => {
        if(element !== "") wordsCount++;
    })
    return(
        <p>{wordsCount} words and {charsCount} characters</p>
    )
}

export default function TextForm({heading, mode}) {
    const [text, setText] = useState("")

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }

    const changeUpperCase = ()=>{
        const newText = text.toUpperCase()
        setText(newText)
    }

    const changeLowerCase = ()=>{
        const newText = text.toLowerCase()
        setText(newText)
    }
    
    const clearText = ()=>{
        const newText = "";
        setText(newText)
    }

    return (
        <>
            <div className="container" style={{color: mode === 'dark' ? 'white' : 'black'}}>
                <h1>{heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? 'grey' : 'white'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={changeUpperCase}>Convert Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={changeLowerCase}>Convert Lowercase</button>
                <button className="btn btn-primary" onClick={clearText}>Clear</button>
            </div>

            <div className='container my-2' style={{color: mode === 'dark' ? 'white' : 'black'}}>
                <h3 className="">Your Text Summary</h3>
                <WordCharCount text={text}/>
                <p>{0.007 * text.split(' ').length} Minutes to read</p>

                <h3>Preview</h3>
                {text.length === 0 ? "Nothing to show preview" : text}
            </div>
        </> 
    )
}
