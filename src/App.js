import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from './HeaderBar';
import { ListGenres } from './ListGenres';
import { ListTracks } from './ListTracks';
import { ListAlbums } from './ListAlbums';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {dataList: props.dataList};
  }
  render() {
    return (
      <div>
        <div className="App">
          <MuiThemeProvider>
            <HeaderBar />
          </MuiThemeProvider>
          <ListGenres tracks = {this.state.dataList}/>
          {/*<ListAlbums tracks = {this.state.dataList} />*/}
        </div>
      </div>
    );
  }
}

export default App;
