	import React, { Component } from 'react';

import './Quad.scss';
import background from '../../../../assets/images/quad-background.png';

class Quad extends Component {

	render() {
		return(
			<div>
				<div className="quad">
					{ /* Lineas divisorias*/ }
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
					<div className="line line4"></div>

					<img src={background} alt="background"/>
					<div className="squares">
						{
							this.props.elements.map((element, index) => (
									<div  id={index} 
											key={index} 
											className={`square ${element === 'X' || element === 'O' ? 'clicked' : ''}`} 
											onClick={ element ? null : () => this.props.handleClick(index)}>
										<h1 className={`item ${element === 'X' ? 'X animated bounceIn' : (element === 'O' ? 'O animated bounceIn' : '')}`}>
											{element}
										</h1>
									</div>
								))
						}
					</div>	

						
				</div>
			</div>
		);
	}
}

export default Quad;