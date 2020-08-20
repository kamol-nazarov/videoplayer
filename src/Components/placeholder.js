import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlay, faCircleNotch, faRandom, faDownload, faVolumeMute, faExpand } from '@fortawesome/free-solid-svg-icons'
import JPlayer, {
	Gui,
	SeekBar,
	BufferBar,
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
  PlaybackRateBar
} from 'react-jplayer';
import JPlaylist, { initializeOptions, Shuffle, Next, Previous, Repeat } from 'react-jplaylist';

import '../Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
				webmv: '/three.webm'
			}
		},
		{
			id: 1,
			title: 'TEST',
			artist: 'TEST',
			sources: {
				webmv: '/two.webm'
			}
		},
		{
			id: 2,
			title: 'TEST',
			artist: 'TEST',
			sources: {
				webmv: '/one.webm'
			}
		}
	]
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const VideoPlaylist = () => (
    <JPlaylist id={jPlayerOptions.id}>
      <JPlayer>
        <div className="main-video">
          <Video />
        </div>
        <Gui>
          <div className="controls">
            <span className="controls">
              <CurrentTime />
              <Duration />
            </span>

            <div className="main-controls">
              <Previous>
                <FontAwesomeIcon icon={faArrowLeft}/>
              </Previous>
              <Play>
                <FontAwesomeIcon icon={faPlay}/>
              </Play>
              <Next>
                <FontAwesomeIcon icon={faArrowRight}/>
              </Next>
              <Repeat>
                <FontAwesomeIcon icon={faCircleNotch}/>
              </Repeat>
              <Shuffle>
                <FontAwesomeIcon icon={faRandom}/>
              </Shuffle>
              <FullScreen>
                <FontAwesomeIcon icon={faExpand}/>
					    </FullScreen>
					    <Download>
                <FontAwesomeIcon icon={faDownload}/>
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

            <div className="jp-progress">
              <SeekBar>
                <BufferBar />
                <PlayBar />
              </SeekBar>
            </div>
            <PlaybackRateBar />
          </div>
				<BrowserUnsupported />
			</Gui>
		</JPlayer>		
	</JPlaylist>	
);

export default VideoPlaylist;
