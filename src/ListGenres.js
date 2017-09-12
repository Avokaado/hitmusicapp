import React from 'react';
import './ListGenres.css';

export class ListGenres extends React.Component {
	constructor(props) {
		super();
		this.showResults = this.showResults.bind(this);
	}
	showResults(e) {
		e.preventDefault();
		console.log('jees');
	}
	render() {
		const genres = this.props.tracks.map((elem) => {
        return elem.genre;
	    });
	    const filtered = genres.filter((elem, index, self) => {
	      return self.indexOf(elem) === index;
	    });
	    const genreLoop = filtered.map((elem, i) => {
	      return (<li key={ i }><a id={ elem } onClick={ this.showResults } href="#">{ elem }</a></li>);
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