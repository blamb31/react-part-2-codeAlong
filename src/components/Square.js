import React, {Component} from 'react'

let clicked = false


export default class Square extends Component {

    constructor(props) {
        super(props)

        this.state = {
            backgroundColor: 'white'
        }
    }


    handleClick = () => {
        if(this.props.mouseDown){
            this.setState({
                backgroundColor: this.props.selectedColor
            })
        }
        else{
            return
        }
    }
    

    render() {


        return(
            <div 
            onMouseEnter={this.handleClick}
            style={{
                height: 10,
                width: 10,
                border: `1px solid black`,
                background: this.state.backgroundColor
            }}>



            </div>
        )
    }
}




// export default class Square extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             backgroundColor: 'white'
//         }
//     }


//     handleClick = () => {
     
//             this.setState({
//                 backgroundColor: this.props.selectedColor
//             })
//         }
       
    
    

//     render() {
//         return(
//             <div 
//             onClick={this.handleClick}
//             style={{
//                 height: 10,
//                 width: 10,
//                 border: `1px solid black`,
//                 background: this.state.backgroundColor
//             }}>



//             </div>
//         )
//     }
// }