/* ShowData.jsx */

import React from "react";
import Table from "react-bootstrap/Table";

const data = [
	{
		firstName: "山田",
		lastName: "愛子",
		age: 34
	},
	{
		firstName: "加藤",
		lastName: "建",
		age: 23
	},
	{
		firstName: "鈴木",
		lastName: "有紗",
		age: 19
	}
];

class ShowData extends React.Component {
	constructor(props) {
		super(props);
		this.table = data.map(person => (
			<tr>
				<td>{person.firstName}</td>
				<td>{person.lastName}</td>
				<td>{person.age}</td>
			</tr>
		));
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<td>苗字</td>
						<td>名前</td>
						<td>年齢</td>
					</tr>
				</thead>
				<tbody>
					{this.table}
				</tbody>
			</Table>
		)
	}
}
export default ShowData;