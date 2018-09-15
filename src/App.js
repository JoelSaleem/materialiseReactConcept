import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import CarouselPage from './components/CarouselPage';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route path="/carouselPage" component={CarouselPage} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
