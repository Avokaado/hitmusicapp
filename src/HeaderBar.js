import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

export default class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };	
	}
	handleToggle = () => this.setState({open: !this.state.open}); 
	render() {
		return (
			<div>
				<AppBar onLeftIconButtonTouchTap={ this.handleToggle } title="App title" menuItems={<li>menuitem</li>}>
				</AppBar>
				<Drawer open={ this.state.open }>
					<MenuItem>Menu item 1</MenuItem>
					<MenuItem>Menu item 2</MenuItem>
				</Drawer>
			</div>
		);
	}
}
