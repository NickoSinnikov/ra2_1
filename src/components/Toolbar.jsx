import React from "react";
import { Component } from "react";

export default class Toolbar extends Component {
	render() {
		return (
			<div class='toolbar'>
				<ul class='toolbarFilters'>
					<li class='filter'>All</li>
					<li class='filter'>Websites</li>
					<li class='filter'>Flayers</li>
					<li class='filter'>Business Cards</li>
				</ul>
			</div >
		)
	}
}
