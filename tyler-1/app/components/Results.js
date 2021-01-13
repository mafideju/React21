import React, { Component } from 'react';
import Card from './Card';
import Profile from './Profile';
import { battle } from '../service/GitApi';
import Loading from './Loading';

class Results extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          winner: null,
          loser: null,
          error: null,
          loading: true
        }
      }
      componentDidMount () {
        battle([ this.props.playerOne, this.props.playerTwo ])
          .then((players) => {
            this.setState({
              winner: players[0],
              loser: players[1],
              error: null,
              loading: false
            })
          }).catch(({ message }) => {
            this.setState({
              error: message,
              loading: false
            })
          })
      }
      render() {
        const { winner, loser, error, loading } = this.state;
    
        if (loading) {
          return <Loading text="Calculando" />;
        }
    
        if (error) {
          return (
            <p className='center-text error'>{error}</p>
          )
        }
    
        return (
			<>
				<div className='grid space-around container-sm'>

					<Card
						header={winner.score === loser.score ? 'Empate' : 'Ganhoôoôu!!!'}
						subheader={`Placar: ${winner.score.toLocaleString()}`}
						avatar={winner.profile.avatar_url}
						name={winner.profile.login}
						href={winner.profile.html_url}
					>
						<Profile profile={winner.profile} />
					</Card>
				
					<Card
						header={winner.score === loser.score ? 'Empate' : 'Perdeu !!!!'}
						subheader={`Placar: ${loser.score.toLocaleString()}`}
						avatar={loser.profile.avatar_url}
						name={loser.profile.login}
						href={loser.profile.html_url}
					>
						<Profile profile={loser.profile} />
					</Card>

				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button 
						className='btn btn-block' 
						onClick={this.props.onResetGame}
					>
						Nova Batalha
					</button>
				</div>
			</>
        )
      }
}

export default Results;