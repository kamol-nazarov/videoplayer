import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowLeft,
	faArrowRight,
	faPlay,
	faCircleNotch,
	faRandom,
	faDownload,
	faVolumeMute,
	faExpand
} from '@fortawesome/free-solid-svg-icons';
import JPlayer, {
	Gui,
	SeekBar,
	Video,
	FullScreen,
	Mute,
	Play,
	PlayBar,
	VolumeBar,
	Duration,
	CurrentTime,
	Download,
	BrowserUnsupported,
	BufferBar
	// actions
} from 'react-jplayer';
import JPlaylist, { initializeOptions, Shuffle, Next, Previous, Repeat, add } from 'react-jplaylist';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import axios from 'axios';

import '../Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { add } from 'react-jplaylist/lib/actions/actions';

const jPlayerOptions = {
	id: 'VideoPlaylist',
	verticalVolume: true
};

const jPlaylistOptions = {
	hidePlaylist: true,
	playlist: [
		{
			id: 0,
			title: 'TEST',
			artist: 'TEST',
			sources: {
				webmv: '/one.webm'
			}
		}
	]
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

class VideoPlaylist extends React.Component {
	state = {
		// Initially, no file is selected
		selectedFile: null
	};

	onFileChange = (event) => {
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });
	};

	fileData = () => {
		if (this.state.selectedFile) {
			let file = this.state.selectedFile;
			this.dispatch(add('VideoPlaylist', file, true));
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);

		// Details of the uploaded file
		console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object
		axios.post('api/uploadfile', formData);
	};

	render() {
		return (
			<div>
				<h1>GeeksforGeeks</h1>
				<h3>File Upload using React!</h3>
				<div>
					<input type="file" onChange={this.onFileChange} />
					<button onClick={this.onFileUpload}>Upload!</button>
				</div>
				{this.fileData()}
				<div>
					<JPlaylist id={jPlayerOptions.id}>
						<JPlayer>
							<div className="main-video">
								<TransformWrapper lockAxisY={false}>
									<TransformComponent>
										<Video />
									</TransformComponent>
								</TransformWrapper>
							</div>
							<Gui>
								<div className="controls">
									<span className="controls">
										<CurrentTime />
										<Duration />
									</span>

									<div className="main-controls">
										<Previous>
											<FontAwesomeIcon icon={faArrowLeft} />
										</Previous>
										<Play>
											<FontAwesomeIcon icon={faPlay} />
										</Play>
										<Next>
											<FontAwesomeIcon icon={faArrowRight} />
										</Next>
										<Repeat>
											<FontAwesomeIcon icon={faCircleNotch} />
										</Repeat>
										<Shuffle>
											<FontAwesomeIcon icon={faRandom} />
										</Shuffle>
										<FullScreen>
											<FontAwesomeIcon icon={faExpand} />
										</FullScreen>
										<Download>
											<FontAwesomeIcon icon={faDownload} />
										</Download>
									</div>

									<div className="jp-volume-container">
										<Mute>
											<FontAwesomeIcon icon={faVolumeMute} />
										</Mute>
										<div className="jp-volume-slider">
											<div className="jp-volume-bar-container">
												<VolumeBar />
											</div>
										</div>
									</div>
									<div className="play-bar">
										<SeekBar>
											<PlayBar />
											<BufferBar />
										</SeekBar>
									</div>
								</div>
								<BrowserUnsupported />
							</Gui>
						</JPlayer>
					</JPlaylist>
				</div>
			</div>
		);
	}
}

export default VideoPlaylist;
