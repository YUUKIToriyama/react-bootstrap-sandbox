/* App.jsx */

import React from "react";
import Button from "react-bootstrap/Button";

import Header from "./Header";
import ShowData from "./ShowData";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Button
					variant="primary"
					disabled={this.state.isLoading}
					onClick={!this.state.isLoading ? () => this.setState({ isLoading: true }) : null}
				>
					{this.state.isLoading ? "Loading..." : "Click to load"}
				</Button>
				<Button variant="outline-secondary" size="lg" block>Click me!</Button>
				<ShowData />
			</div>
		)
	}

}
export default App;