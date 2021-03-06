/* Header.jsx */

import React from "react";
import {
	Jumbotron,
	Container,
	Button
} from "react-bootstrap";

import SubmitForm from "./SubmitForm";

class Header extends React.Component {
	render() {
		return (
			<Jumbotron fluid>
				<Container>
					<h1>Hello, world!</h1>
					<p>ようこそ！</p>
					<SubmitForm />
					<Button
						variant="primary"
						size="sm"
					>
						Get Started
					</Button>
				</Container>
			</Jumbotron>
		)
	}
}
export default Header;