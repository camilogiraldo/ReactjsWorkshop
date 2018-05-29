import React from 'react';
import './NewPost.css'
import { Redirect} from 'react-router-dom';
import axios from 'axios';

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: 'Camilo',
        submitted: false
    }

    onCreateHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        this.setState({
            submitted: true
        })
    }

    onChangeHandler = (e) => {
        let fieldName = e.target.name;
        this.setState({
            [fieldName]: e.target.value
        })
    }

    render() {
        let redirect = null;
        if(this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a new Post</h1>
                <label>Title</label>
                <input name="title" type="text" value={this.state.title} onChange={this.onChangeHandler}/>
                <label>Content</label>
                <textarea name="content" rows="4" value={this.state.content} onChange={this.onChangeHandler}/>
                <label>Author</label>
                <span>{this.state.author}</span>
                <br/>
                <br/>
                <button onClick={this.onCreateHandler}>Create</button>
            </div>
        );
    }
}


export default NewPost;
