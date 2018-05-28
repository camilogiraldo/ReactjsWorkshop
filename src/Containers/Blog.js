import React, { Component} from 'react';
import './Blog.css'
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

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
                        <li>Posts</li>
                        <li>New Post</li>
                    </ul>
                </nav>
                <Posts />
                <FullPost />
                <NewPost />
            </div>
        );
    }
}

export default Blog;
