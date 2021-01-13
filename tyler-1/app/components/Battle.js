import React, { Component } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';


class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: null,
            playerTwo: null,
            battle: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, player) {
        this.setState({
            [id]: player,
        });
    }

    render() {

        if(this.state.battle) {
            return <Results playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} />;
        }
        
        return (
        <>
            <Instructions />
            <div className="input__container">
                {this.state.playerOne === null 
                    ? <PlayerInput
                        label="Jogador 1"
                        onSubmit={(player) => this.handleSubmit('playerOne', player)}
                     />
                    : <PlayerPreview
                        username={this.state.playerOne}
                        onReset={() => this.setState({ playerOne: null })}
                        label="Jogador 1"
                    />
                }

                {this.state.playerTwo === null 
                    ? <PlayerInput
                        label="Jogador 2"
                        onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                     />
                    : <PlayerPreview
                        username={this.state.playerTwo}
                        onReset={() => this.setState({ playerTwo: null })}
                        label="Jogador 2"
                    />
                }

            </div>
            {this.state.playerOne && this.state.playerTwo && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                    <button
                        onClick={() => this.setState({ battle: true })}
                        className='btn btn-block'
                    >
                        Pra Guerra!
                    </button>
                </div>
            )}
        </>
        );
    };
}

export default Battle;