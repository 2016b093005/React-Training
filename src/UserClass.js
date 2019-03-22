import React, { Component } from 'react';

class userClass extends Component{

    state = {
        Users :[
            {name: 'Lakshaman'},
            {name: 'Shiv'}
        ]
    }

    // userName = '***********************';
    // userEmail = 'abc@xyz';

    clickHandler = (e) => {
        this.setState({
            Users : [
                {name: 'Thor'},
                {name: 'Shaktimaan'}
            ]
        })
        // alert(e.currentTarget);
        // alert(e.type);
        // alert(e.nativeEvent);
        // alert("Button is clicked");
    }

    render(){
        return(
            <div>
                <p>{this.state.Users[0].name}</p>
                <p>{this.state.Users[1].name}</p>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default userClass;