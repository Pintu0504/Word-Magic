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

export default WordCharCount