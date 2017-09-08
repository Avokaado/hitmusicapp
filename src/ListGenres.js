import React from 'react';
import './ListGenres.css';

export class ListGenres extends React.Component {
	render() {
		return (
			<div className="genreList">
				<ul className="nav justify-content-center">
					<li><a href="#">All</a></li>
					<li><a href="#">Pop</a></li>
					<li><a href="#">Rock</a></li>
					<li><a href="#">Hip-hop / Rap</a></li>
					<li><a href="#">Techno</a></li>
					<li><a href="#">Electropop</a></li>
					<li><a href="#">Metal</a></li>
					<li><a href="#">Folk</a></li>
					<li><a href="#">Indie</a></li>
				</ul>
			</div>
		);
	}
}
