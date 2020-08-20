import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const CropperTool = (props) => {
	const [ crop, setCrop ] = useState({ x: 0, y: 0 });
	const [ zoom, setZoom ] = useState(1);

	return (
		<Cropper
			video={props.Video}
			crop={crop}
			zoom={zoom}
			aspect={4 / 3}
			onCropChange={setCrop}
			onZoomChange={setZoom}
			onImageLoaded={(res) => {
				console.log(res);
			}}
		/>
	);
};

export default CropperTool;
