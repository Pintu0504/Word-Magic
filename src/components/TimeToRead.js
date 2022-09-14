const TimeToRead = ({text})=>{
    if(text.length === 0) {
        return (
            <p>Nothing To Read</p>
        )
    }
    return (
        <p>{0.007 * text.split(' ').length} Minutes to read</p>
    )
}

export default TimeToRead