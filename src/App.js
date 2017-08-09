import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Roster from './components/Roster.js';
import Schedule from './components/Schedule.js';
import Header from './Header.js';

//Routing based on this url:
//  https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
const Main = () => (
		<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/roster' component={Roster} />
			<Route path='/schedule' component={Schedule} />
		</Switch>
	</main>	
);

const Home = () => (
		<div>
		<h1>Welcome to the Tornadoes Website</h1>
		</div>
	)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        	<Header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        </div>
        <Main>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </Main>
      </div>
    );
  }
}


export default App;
