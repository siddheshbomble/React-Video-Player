import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component{
	constructor(props){
		super();
		this.state = {term:''};
	}
	render(){
		return(
			<input onChange = {event => this.setState({term:event.target.value})}/>);
	}
};

export default SearchBar;