import React from 'react';
import './ListTracks.css';

export class ListTracks extends React.Component {
	tracklist(modifier) {
		 let listVariable = this.props.tracks.map((elem, i) => {
		 	if (elem.genre === modifier && !elem.album) {
				return (
					<li key={ i }><a target="_blank" href={elem.url}> { elem.artist } - { elem.track } ({ elem.year })</a></li>
				)
			}
		});
		return listVariable;
	}
	render() {
		const genres = this.props.tracks.map((elem) => {
        	return elem.genre;
    	});
	    const filtered = genres.filter((elem, index, self) => {
	      return self.indexOf(elem) === index;
	    });
	    const genreLoop = filtered.map((elem, i) => {
	      return ({elem});
	    });
		return (
			<div>
				{ /* Return everything in one single string, should work if could loop all  */}
				{ console.log(this.tracklist(genreLoop)) }
				<div className="tracklist tracklist-pop">
					<ul>
						<h3>Pop</h3>
						{ this.tracklist('Pop') }
					</ul>
				</div>
				<div className="tracklist tracklist-hiphop">
					<ul>
						<h3>Hip hop</h3>
						{ this.tracklist('Hiphop') }
					</ul>
				</div>
				<div className="tracklist tracklist-rock">
					<ul>
						<h3>Rock</h3>
						{ this.tracklist('Rock') }
					</ul>
				</div>
				<div className="tracklist tracklist-punk">
					<ul>
						<h3>Punk</h3>
						{ this.tracklist('Punk') }
					</ul>
				</div>
				<div className="tracklist tracklist-electronic">
					<ul>
						<h3>Electronic</h3>
						{ this.tracklist('Electronic') }
					</ul>
				</div>
				<div className="tracklist tracklist-triphop">
					<ul>
						<h3>Trip hop</h3>
						{ this.tracklist('Trip hop') }
					</ul>
				</div>
				<div className="tracklist tracklist-trance">
					<ul>
						<h3>Trance</h3>
						{ this.tracklist('Trance') }
					</ul>
				</div>
				<div className="tracklist tracklist-metal">
					<ul>
						<h3>Metal</h3>
						{ this.tracklist('Metal') }
					</ul>
				</div>
				<div className="albumlist albumlist-reggae">
					<ul>
						<h3>Reggae</h3>
						{ this.tracklist('Reggae') }
					</ul>
				</div>
				<div className="albumlist albumlist-alternative">
					<ul>
						<h3>Alternative</h3>
						{ this.tracklist('Alternative') }
					</ul>
				</div>
			</div>
		);
	}
}
