import React, { Component } from 'react';

import Radio from './Radio/Radio';

import './Settings.scss';

class Settings extends Component {
	render() {
		return(
			<div>
				<form>
					<fieldset className="form-options">
						<legend className="form-question">What is your ideal match?</legend>
						<Radio id="match_1" checked={true} />
						<Radio id="match_2" />
					</fieldset>
				</form>
			</div>
			);
	}
}

export default Settings;