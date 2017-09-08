import React from 'react';
import './ListAlbums.css';

export class ListAlbums extends React.Component {
	albumlist(modifier) {
		 let albumVariable = this.props.tracks.map((elem, i) => {
		 	if (elem.genre === modifier && elem.album) {
				return (
					<li key={ i }><a target="_blank" href={elem.url}>{ elem.artist } - { elem.album } ({ elem.year })</a></li>
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
						{ this.albumlist('Pop') }
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
						{ this.albumlist('Rock') }
					</ul>
				</div>
				<div className="albumlist albumlist-punk">
					<ul>
						<h3>Punk</h3>
						{ this.albumlist('Punk') }
					</ul>
				</div>
				<div className="albumlist albumlist-electronic">
					<ul>
						<h3>Electronic</h3>
						{ this.albumlist('Electronic') }
					</ul>
				</div>
				<div className="albumlist albumlist-triphop">
					<ul>
						<h3>Trip hop</h3>
						{ this.albumlist('Trip hop') }
					</ul>
				</div>
				<div className="albumlist albumlist-metal">
					<ul>
						<h3>Metal</h3>
						{ this.albumlist('Metal') }
					</ul>
				</div>
			</div>
		);
	}
}
