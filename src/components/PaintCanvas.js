import React, {Component} from 'react'

import ColorPicker from './ColorPicker'
import Square from './Square'
import { wrap } from 'module';

export default class PaintCanvas extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            selectedColor: 'white',
            mouseDown: false
        }
    }

    changeSelectedColor = (color) => {
        
        this.setState({
            selectedColor: color
        })
        
    } 

    draw() {
        let squares = []
        for (let i = 0; i < 5016; i++) {
            squares.push(<Square selectedColor={this.state.selectedColor} mouseDown={this.state.mouseDown}/>)
        }

        return squares
    }

    handleMouseDown = () => {
        this.setState({
            mouseDown: true
        })
    }

    handleMouseup = () => {
        this.setState({
            mouseDown: false
        })
    }
    
    render() {

        return(
            <div>
                <ColorPicker handleColorClick={this.changeSelectedColor} />
                
                <div
                onMouseDownCapture={this.handleMouseDown}
                onMouseUpCapture={this.handleMouseup}
                style={{display:"flex", flexWrap: "wrap"}}>
                {this.draw()}
                </div>
            </div>
        )
    }
}