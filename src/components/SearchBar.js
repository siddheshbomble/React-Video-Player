import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component{
	constructor(props){
		super();
		this.state = {term:''};
	}
	render(){
		return(
			<input type="text" onChange = {event => this.setState({term:event.target.value})} placeholder="Search here"/>);
	}
};

export default SearchBar;