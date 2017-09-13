import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ListTracks } from './ListTracks';
import './ListGenres.css';

export class ListGenres extends React.Component {
	constructor(props) {
		super();
	}
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
		const genres = this.props.tracks.map((elem) => {
        	return elem.genre;
	    });
	    const filtered = genres.filter((elem, index, self) => {
	      return self.indexOf(elem) === index;
	    });
	    const genreLoop = filtered.map((elem, i) => {
	      return (<Tab key={ i }><a>{ elem }</a></Tab>);
	    });
		return (
			<div className="genreList">
				<Tabs>
					<TabList>
						<ul className="nav">
							{ genreLoop } 
						</ul>
					</TabList>
					<TabPanel>
						<div className="tracklist tracklist-pop">
							<ul>
								<h3>Pop</h3>
								{ this.tracklist('Pop') }
								<h3>Albums</h3>
								{ this.albumlist('Pop') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-hiphop">
							<ul>
								<h3>Hip hop</h3>
								{ this.tracklist('Hiphop') }
								<h3>Albums</h3>
								{ this.albumlist('Hiphop') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-rock">
							<ul>
								<h3>Rock</h3>
								{ this.tracklist('Rock') }
								<h3>Albums</h3>
								{ this.albumlist('Rock') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-punk">
							<ul>
								<h3>Alternative</h3>
								{ this.tracklist('Alternative') }
								<h3>Albums</h3>
								{ this.albumlist('Alternative') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-electronic">
							<ul>
								<h3>Trip hop</h3>
								{ this.tracklist('Trip hop') }
								<h3>Albums</h3>
								{ this.albumlist('Trip hop') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-triphop">
							<ul>
								<h3>Trance</h3>
								{ this.tracklist('Trance') }
								<h3>Albums</h3>
								{ this.albumlist('Trance') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-trance">
							<ul>
								<h3>Punk</h3>
								{ this.tracklist('Punk') }
								<h3>Albums</h3>
								{ this.albumlist('Punk') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="tracklist tracklist-metal">
							<ul>
								<h3>Electronic</h3>
								{ this.tracklist('Electronic') }
								<h3>Albums</h3>
								{ this.albumlist('Electronic') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="albumlist albumlist-reggae">
							<ul>
								<h3>Metal</h3>
								{ this.tracklist('Metal') }
								<h3>Albums</h3>
								{ this.albumlist('Metal') }
							</ul>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="albumlist albumlist-alternative">
							<ul>
								<h3>Reggae</h3>
								{ this.tracklist('Reggae') }
								<h3>Albums</h3>
								{ this.albumlist('Reggae') }
							</ul>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}