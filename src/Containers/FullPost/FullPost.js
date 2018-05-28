import React from 'react';
import './FullPost.css'
import {Route} from 'react-router-dom'

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

   componentDidMount = () => {
     this.loadPost()
   }

   componentDidUpdate = () => {
     this.loadPost()
   }
   
   loadPost = () => {
        if (this.props.match.params.id) {
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                  +this.state.loadedPost !== +this.props.match.params.id)
              ) {
                  this.setState({
                      loadedPost: this.props.match.params.id
                  })
              }
        }
   }
   

    render() {
        return (
            <div className="FullPost">
                <h1>{this.state.loadedPost}</h1>
                <p>body</p>
                <div className="Edit">
                    <button>Delete</button>
                </div>
            </div>
        );
    }
}

export default FullPost;
