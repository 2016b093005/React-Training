import React, { Component } from 'react';

class employee extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const empCard = {
            width: '150px',
            border: '3px solid black',
            borderRadius: '5px',
            marginLeft: '25px',
            padding: '14px'
        }

        return(
            <div style={empCard}>
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}
export default employee;