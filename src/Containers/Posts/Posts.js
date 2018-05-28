import React from 'react';
import Post from '../../Components/Post/Post';
import './Posts.css'
import { Route } from 'react-router-dom' 
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    postClickHandler = id => {
        console.log('clicked')
        this.props.history.push({ pathname: "/posts/" + id });
    }

    render() {
        return (
            <div>
                <section className="Posts">
                    <Post title="Post 1" clicked={() => this.postClickHandler(1)}/>
                    <Post title="Post 2" clicked={() => this.postClickHandler(2)}/>
                    <Post title="Post 3" clicked={() => this.postClickHandler(3)}/>
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
