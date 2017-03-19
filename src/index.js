import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component{
	render(){
		return(<SearchBar/>);
	};
}

render(<App />,document.querySelector('#main'));