import React, { Component } from 'react'
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments() {
        console.log('this.props :>> ', this.props);

        return this.props.comments.map(comment => (
            <li key={comment}>{ comment }</li>
        ));
    }
    
    render() {
        return (
            <div>
                <h1>Titulo</h1>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)