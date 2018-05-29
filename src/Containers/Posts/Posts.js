import React from 'react';
import Post from '../../Components/Post/Post';
import './Posts.css'
import { Route } from 'react-router-dom' 
import FullPost from '../FullPost/FullPost';
import axios from 'axios';

class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount = () => {
        axios.get('/posts')
            .then(response => {
                let posts = response.data.slice(0, 4);
                let updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Camilo'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(error => console.log(error) )
    }
    

    postClickHandler = id => {
        console.log('clicked')
        this.props.history.push({ pathname: "/posts/" + id });
    }

    render() {
        let posts = this.state.posts.map(post=> {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickHandler(post.id)}
                /> 
            )
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
