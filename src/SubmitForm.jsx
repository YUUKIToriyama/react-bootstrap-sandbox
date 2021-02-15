/* SubmitForm.jsx */

import React from "react";

import {
	InputGroup,
	FormControl
} from "react-bootstrap";

class SubmitForm extends React.Component {
	render() {
		return (
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text id="username">@</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="username"
				/>
			</InputGroup>
		)
	}
}

export default SubmitForm;