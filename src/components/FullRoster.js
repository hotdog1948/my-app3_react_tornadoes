import React, { Component } from 'react';
import PlayerAPI from './PlayerAPI';
import {Link} from 'react-router-dom';

class FullRoster extends Component {
	constructor() {
		super();
		this.state = {
	        players: PlayerAPI.all().map(p => (
	          <li key={p.number}>
	            <Link to={`/roster/${p.number}`}>{p.name}</Link>
	          </li>
	        ))
		}
	}
	render () {
		return (
		<div>
		<ul>
	{this.state.players}
       	</ul>
       	</div>
       	)
	}	
}

//alternate form of above component
const FullRosterX = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
		
export default FullRoster;