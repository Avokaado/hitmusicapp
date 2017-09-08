import React from 'react';
import './ListGenres.css';

export class ListGenres extends React.Component {
	showResults(e) {
		e.preventDefault();
		console.log('Painoit nappia');
	}
	render() {
		const genres = this.props.tracks.map((elem) => {
        return elem.genre;
	    });
	    const filtered = genres.filter((elem, index, self) => {
	      return self.indexOf(elem) === index;
	    });
	    const genreLoop = filtered.map((elem, i) => {
	      return (<li key={ i }><a onClick={ this.showResults }href="#">{elem}</a></li>);
	    });
		return (
			<div className="genreList">
				<ul className="nav justify-content-center">
					<li><a href="#">All</a></li>
					{ genreLoop }
				</ul>
			</div>
		);
	}
}