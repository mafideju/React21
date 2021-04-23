import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map((comment, i) => (
            <li key={i}>{ comment }</li>
        ));
    }
    
    render() {
        console.log('this.props', this.props)
        console.log('this.state', this.state)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ol>
                    {this.renderComments()}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)