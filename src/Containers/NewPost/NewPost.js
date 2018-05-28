import React from 'react';
import './NewPost.css'

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: 'Camilo',
        submitted: false
    }

    render() {
        return (
            <div className="NewPost">
                <h1>Add a new Post</h1>
                <label>Title</label>
                <input type="text" />
                <label>Content</label>
                <textarea rows="4"/>
                <label>Author</label>
                <span>{this.state.author}</span>
                <br/>
                <br/>
                <button>Submit</button>
            </div>
        );
    }
}


export default NewPost;
