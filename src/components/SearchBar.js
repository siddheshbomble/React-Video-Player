import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component{
	constructor(props){
		super();
		this.state = {term:''};
	}
	render(){
		return(
			<input type="text" className="search-bar"
			onChange = {event => this.onInputChange({term:event.target.value})} 
			placeholder="Search here"/>);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
};

export default SearchBar;