import React from 'react';
import './FullPost.css'

class FullPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="FullPost">
                <h1>title</h1>
                <p>body</p>
                <div className="Edit">
                    <button>Delete</button>
                </div>
            </div>
        );
    }
}

export default FullPost;
