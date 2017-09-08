import React, { Component } from 'react';
import { Header } from './Header';
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
        <Header />
        <div className="App container">
          <ListGenres tracks = {this.state.dataList}/>
          <ListTracks tracks = {this.state.dataList} />
          <ListAlbums tracks = {this.state.dataList} />
        </div>
      </div>
    );
  }
}

export default App;
