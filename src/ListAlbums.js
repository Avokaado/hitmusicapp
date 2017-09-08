import React from 'react';
import './ListAlbums.css';

export class ListAlbums extends React.Component {
	albumlist(modifier) {
		 let albumVariable = this.props.tracks.map((elem, i) => {
		 	if (elem.genre === modifier && elem.album) {
				return (
					<li key={ i }>{ elem.artist } - { elem.album } ({ elem.year })</li>
				)
			}
		});
		return albumVariable;
	}
	render() {
		return (
			<div>
				<h2>Albums</h2>
				<div className="albumlist albumlist-pop">
					<ul>
						<h3>Pop</h3>
						{ this.albumlist('pop') }
					</ul>
				</div>
				<div className="albumlist albumlist-hiphop">
					<ul>
						<h3>Hip hop</h3>
						{ this.albumlist('Hiphop') }
					</ul>
				</div>
				<div className="albumlist albumlist-rock">
					<ul>
						<h3>Rock</h3>
						{ this.albumlist('rock') }
					</ul>
				</div>
				<div className="albumlist albumlist-punk">
					<ul>
						<h3>Punk</h3>
						{ this.albumlist('punk') }
					</ul>
				</div>
				<div className="albumlist albumlist-electronic">
					<ul>
						<h3>Electronic</h3>
						{ this.albumlist('electronic') }
					</ul>
				</div>
				<div className="albumlist albumlist-triphop">
					<ul>
						<h3>Trip hop</h3>
						{ this.albumlist('trip hop') }
					</ul>
				</div>
			</div>
		);
	}
}
