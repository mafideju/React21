import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'Actions';
// import * as actions from 'Actions';

class CommentBox extends Component {
    state = { comment: "" }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    onSubmitText = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    }

    fetchComments = () => {
        this.props.fetchComments()
            .then(data => console.log('data', data))
            .catch(err => console.log('errooooooou', err));
    }
    
    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.onSubmitText}>
                        <h1>{this.props.title}</h1> 
                        <textarea value={this.state.comment} onChange={this.handleChange}></textarea>
                        <div>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
                <div>
                    <button className="button-comments" onClick={this.fetchComments}>Buscar</button>
                </div>
            </>
        );
    }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);