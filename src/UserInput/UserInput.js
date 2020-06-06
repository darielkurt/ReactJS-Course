import React from 'react'

const userInput = (props) => {
    const style = {
        border: '1px solid pink',
        width: '300px',
        margin: '16px auto'
    }
    return <input type="text" 
                    style={style}
                    onChange={props.changed} 
                    value={props.currentName} />
}

export default userInput