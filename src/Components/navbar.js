import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../App.css';

class NavBar extends React.Component {
	c;
	render() {
		const fetchdata = () => {
			return (
				<div className="image-item">
					<img
						src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
						alt="item"
					/>
				</div>
			);
		};
		return (
			<InfiniteScroll dataLength={5} next={fetchdata} hasMore={true} loader={<img alt="loading" />}>
				<div className="image-grid" style={{ marginTop: '30px' }}>
					<div className="image-item">
						<img
							src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
							alt="item"
						/>
					</div>
					<div className="image-item">
						<img
							src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
							alt="item"
						/>
					</div>
					<div className="image-item">
						<img
							src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
							alt="item"
						/>
					</div>
					<div className="image-item">
						<img
							src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
							alt="item"
						/>
					</div>
					<div className="image-item">
						<img
							src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
							alt="item"
						/>
					</div>
				</div>
			</InfiniteScroll>
		);
	}
}

export default NavBar;
