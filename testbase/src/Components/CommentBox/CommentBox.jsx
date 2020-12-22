import React, { Component } from 'react';

class CommentBox extends Component {
    state = { comment: "" }

    handleChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    onSubmitText = (e) => {
        e.preventDefault();

        console.log(this.state.comment);

        this.setState({
            comment: ""
        });
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmitText}>
                <h1>Comment Box</h1>    
                <textarea col="50" row="50" value={this.state.comment} onChange={this.handleChange}></textarea>
                <div>
                    <button>Enviar</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;