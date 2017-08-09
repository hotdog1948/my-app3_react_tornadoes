import React, {Component} from 'react';
import PlayerAPI from './PlayerAPI';

class Player extends Component {
		constructor (props) {
		super(props);
		this.state = {
			num: props.match.params.number,
			player: PlayerAPI.get(parseInt(props.match.params.number, 10))
		};
	}

	render() {
		
		if (!this.state.player) {
			return <div>Sorry, not in the roster</div>
		}
		
    	return (<div>Player no. {this.state.player.name}, {this.state.player.position}</div>)
	}
};

export default Player;
