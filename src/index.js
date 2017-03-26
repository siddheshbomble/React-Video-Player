import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAb_9LBQD0qQWbahjXYiSW0BdvYV258EfQ';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {videos:[]};

		YTSearch({key: API_KEY, term: 'surfboards'},
			(videos) => {this.setState({videos})}
		);
	}
	render(){
		return(
		<div>
			<SearchBar/>
			<VideoList videos={this.state.videos}/>
		</div>
		);
	};
}

render(<App/>,document.querySelector('#main'));