import "./Drawing.css";
import React from "react";
import Popup from "reactjs-popup";

const BASE_WIDTH = 614;
const BASE_HEIGHT = 835;

class Drawing extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgHeight: props.imgHeight,
            imgWidth: props.imgWidth,
            coords: props.coords,
            altText: props.altText,
            child: props.children
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            imgHeight: props.imgHeight,
            imgWidth: props.imgWidth,
            coords: props.coords,
            altText: props.altText,
            child: props.children
        });
    }

    render() {
        return <Popup className="popup-overlay" trigger={<area shape="poly" coords={this.getCoords()} alt={this.state.altText} href={"#"}/>} modal>
            <div className="popup-content">
            {this.props.children}
            </div>
        </Popup>
    }

    getCoords() {
        return this.state.coords.map((element,index) => {
                return index % 2 === 0 ? 
                    Math.floor((this.state.imgWidth / BASE_WIDTH) * element)
                    : Math.floor((this.state.imgHeight / BASE_HEIGHT) * element);
        });
    }
    
}

export default Drawing;