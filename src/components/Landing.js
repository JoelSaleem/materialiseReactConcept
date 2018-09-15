import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import LandingInfo from './LandingInfo';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="nav-content pink accent-2">
					<ul className="tabs tabs-transparent">
						<li className="tab">
							<a href="#test1">Tab 1</a>
						</li>
						<li className="tab">
							<a className="active" href="#test2">
								Tab 2
							</a>
						</li>
						<li className="tab">
							<a href="#test3">Tab 3</a>
						</li>
					</ul>
				</div>
				<Button
					floating
					fab="horizontal"
					icon="dehaze"
					className="light-blue lighten-1"
					large
					style={{ bottom: '45px', right: '24px' }}
				>
					<Modal
						header="Services"
						trigger={
							<Button floating icon="shopping_cart" className="pink accent-2" />
						}
					>
						<p>Proficient in</p>
						<ul>
							<li>JavaScript</li>
							<li>ReactJS</li>
							<li>Node.JS</li>
						</ul>
					</Modal>

					<Modal
						header="Email"
						trigger={<Button floating icon="email" className="pink accent-2" />}
					>
						<p>
							<b>Feel free to contact me on: </b>
						</p>
						<p>Email: joeljsaleem@gmail.com</p>
						<p>LinkedIn: https://www.linkedin.com/in/joel-saleem-2071b5136/</p>
						<p>GitHub: https://github.com/JoelSaleem/</p>
						<p>Phone: 07906896131</p>
					</Modal>

					<Modal
						header="Find me"
						trigger={<Button floating icon="place" className="pink accent-2" />}
					>
						<p>
							I work in and around London and remote work to the far ends of the
							Earth.
						</p>
					</Modal>

					<Modal
						header="Phone"
						trigger={<Button floating icon="phone" className="pink accent-2" />}
					>
						<p>Feel free to contact me on:</p>
					</Modal>
				</Button>

				<div id="test1" className="col s12">
					<LandingInfo infoText="Put your info in here..." />
				</div>
				<div id="test2" className="col s12">
					<LandingInfo infoText="... or in here" />
				</div>
				<div id="test3" className="col s12">
					<LandingInfo infoText="!" />
				</div>
			</div>
		);
	}
}

export default Landing;
