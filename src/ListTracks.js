import React from 'react';
import './ListTracks.css';

export class ListTracks extends React.Component {
	tracklist(modifier) {
		 let listVariable = this.props.tracks.map((elem, i) => {
		 	if (elem.genre === modifier && !elem.album) {
				return (
					<li key={ i }>{ elem.artist } - { elem.track } ({ elem.year })</li>
				)
			}
		});
		return listVariable;
	}
	render() {
		return (
			<div>
				<div className="tracklist tracklist-pop">
					<ul>
						<h3>Pop</h3>
						{ this.tracklist('pop') }
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
						{ this.tracklist('rock') }
					</ul>
				</div>
				<div className="tracklist tracklist-punk">
					<ul>
						<h3>Punk</h3>
						{ this.tracklist('punk') }
					</ul>
				</div>
				<div className="tracklist tracklist-electronic">
					<ul>
						<h3>Electronic</h3>
						{ this.tracklist('electronic') }
					</ul>
				</div>
				<div className="tracklist tracklist-triphop">
					<ul>
						<h3>Trip hop</h3>
						{ this.tracklist('trip hop') }
					</ul>
				</div>
			</div>
		);
	}
}
