import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{
    state = {
        Post : ''
    }

    handleClick = () => {
        axios.get('http://jsonplaceholder.typicode.com/posts/5')
            .then(resp => {
                this.setState({Post : resp.data.body})
            });
    }

    render(){
        return(
            <div>
                <button type='button' onClick={this.handleClick}>
                 Get Data
                 </button>
                 <p>{this.state.Post}</p>
            </div>
        )
    }

}

export default Post;