import React from 'react';
import { Provider } from 'react-redux';
// import CropperTool from './Components/cropper';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import Playlist from './Components/playlist';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles the jPlayer to look nice
import 'react-jplayer/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplayer/src/less/controls/iconControls.less';

import 'video.js/dist/video-js.css';
// const videoJsOptions = {
// 	autoplay: false,
// 	playbackRates: [ 0.5, 1, 1.25, 1.5, 2 ],
// 	width: 720,
// 	height: 300,
// 	controls: true,
// 	sources: [
// 		{
// 			src: '/sample-mp4-file.mp4',
// 			type: 'video/mp4'
// 		}
// 	],
// 	responsive: true,
// 	nativeControlsForTouch: true,
// 	breakpoints: {
// 		medium: 500
// 	}
// };

const store = createStore(combineReducers({ jPlayers }));

class App extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron className="main-page">
					<Jumbotron className="main-page--">
						<Provider store={store}>
							<Playlist />
						</Provider>
					</Jumbotron>
				</Jumbotron>
				{/* <Jumbotron>
					<CropperTool Video={'one.webm'} />
				</Jumbotron> */}
			</div>
		);
	}
}

export default App;
