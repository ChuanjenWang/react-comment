import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import requireAuth from '../components/hoc/requireAuth';

class CommentBox extends Component {
    state = {
        comment: ''
    };
    
    changeHandler = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h4>This is Comment Box</h4>
                    <textarea onChange={this.changeHandler} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button>
                    Fetch Comments
                </button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));