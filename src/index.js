import _ from 'lodash';
import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAb_9LBQD0qQWbahjXYiSW0BdvYV258EfQ';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {videos:[],
			selectedVideo : null
		};
		this.videoSearch('spongebob');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term},
			(videos) => {this.setState({videos:videos, 
				selectedVideo : videos[0]
			})}
		);
	}

	render(){

		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

		return(
		<div>
			<SearchBar onSearchTermChange = {videoSearch}/>
			<div className="container">
			<VideoDetail video = {this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos}/>
		</div>
		</div>
		);
	};
}

render(<App/>,document.querySelector('#main'));