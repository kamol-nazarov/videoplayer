import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';
import VideoPlaylist from './playlist-backend';

import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import '../App.css';
/* Pass the jPlaylist reducer and it's initialStates to the store */

const store = createStore(combineReducers({ jPlayers, jPlaylists }));

export default class Playlist extends React.Component {

  render() {

    return (

      <Provider store={store}>
        <VideoPlaylist></VideoPlaylist>
      </Provider>

    );
  }

}