import React,{ Component } from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = {term:''};
		this.userEventHandler = this.userEventHandler.bind(this);
	}

	userEventHandler(event){
		event.preventDefault();
		this.setState({term: event.target.value});
		//console.log(this);
		this.props.onSearchTermChange(event.target.value)
	}

	render(){

		return (
		<div className="search-bar">
			<input value={this.state.term} onChange={this.userEventHandler}/>
		</div>);
	}
}

export default SearchBar;