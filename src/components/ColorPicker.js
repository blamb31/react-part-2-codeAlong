import React from 'react'

export default function ColorPicker(props) {
    return(
        <div>
            <button onClick={() => props.handleColorClick('#00c7ff')}>Blue</button>
            <button onClick={() => props.handleColorClick('#00ff1d')}>Green</button>
            <button onClick={() => props.handleColorClick('#9e00ce')}>Purple</button>
            <button onClick={() => props.handleColorClick('#fff719')}>Yellow</button>
            <button onClick={() => props.handleColorClick('#ff0000')}>Red</button>
            <button onClick={() => props.handleColorClick('#ffad2b')}>Orange</button>
            <button onClick={() => props.handleColorClick('#ffa8e3')}>Pink</button>
            <button onClick={() => props.handleColorClick('#734d26')}>Brown</button>
            <button onClick={() => props.handleColorClick('white')}>Earase</button>
        </div>
    )
}