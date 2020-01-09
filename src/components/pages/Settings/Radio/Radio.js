import React, { Component } from 'react';

import './Radio.scss';

class Radio extends Component {
	render() {
		return(
			<p className="form-answer"> 
				<input type="radio" name="match" id={this.props.id} value="guy" checked={this.props.checked}/> 
				<label htmlFor={this.props.id}>									
					<span>X</span>
					Guy
				</label> 
			</p>
			);
	}
}

export default Radio;