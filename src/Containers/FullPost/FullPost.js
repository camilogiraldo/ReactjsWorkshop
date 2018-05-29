import React from 'react';
import './FullPost.css'
import axios from 'axios';

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
                  this.state.loadedPost.id !== +this.props.match.params.id)
              ) {
                //   this.setState({
                //       loadedPost: this.props.match.params.id
                //   })

                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
              }
        }
   }
   onDeleteHandler = () => {
       axios.delete('/posts/' + this.props.match.params.id).then(response => console.log(response))
   }

    render() {
        let post;
        
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: "center" }}>Loading...!</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.onDeleteHandler}>Delete</button>
                </div>
            </div>
            )
        }

        return post
    }
}

export default FullPost;
