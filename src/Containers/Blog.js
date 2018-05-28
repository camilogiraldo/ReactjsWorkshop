import React, { Component} from 'react';
import './Blog.css'
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Blog">
                <nav>
                    <ul>
                        <li><NavLink to="/posts">Posts</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;
