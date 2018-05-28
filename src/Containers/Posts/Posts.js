import React from 'react';
import Post from '../../Components/Post/Post';
import './Posts.css'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Posts">
                <section>
                    <Post />
                    <Post />
                    <Post />
                </section>
            </div>
        );
    }
}

export default Posts;
