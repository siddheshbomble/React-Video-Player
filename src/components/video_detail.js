import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {return <div>loading...</div>;}

	return (
	<div className="video-detail">
		<div className="embed-responsive">
			<iframe src="http://www.youtube.com/embed/{video.id.videoId}?origin=http://localhost" width="640" height="360" className="embed-responsive-item">

			</iframe>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	</div> );
}

export default VideoDetail;