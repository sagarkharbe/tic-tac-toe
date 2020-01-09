import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



import './index.scss';
import 'animate.css/animate.css';

import App from './App/App';
import Menu from './components/pages/Menu/Menu';
import Game from './components/pages/Game/Game';

import registerServiceWorker from './registerServiceWorker';

// I use HashRouter because BrowserRouter is not working with gh-pages
ReactDOM.render(
	<HashRouter>
		<Route render={({ location }) => (
			<App>
				<TransitionGroup>
					<CSSTransition key={location.key}  timeout={450}
                classNames="fade">
						<Switch location={location}>
							<Route exact path='/' component={ Menu }/>						
							<Route exact path='/start' component={ Game }/>						
							<Route exact path='/settings' render={(props) => <Menu showSettingsPopup={true} {...props} /> } />						
							<Route exact path='/help' render={(props) => <Menu showHelpPopup={true} {...props} /> } />	
												
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</App>
			)}
		/>
	</HashRouter>
	, document.getElementById('root'));

registerServiceWorker();
