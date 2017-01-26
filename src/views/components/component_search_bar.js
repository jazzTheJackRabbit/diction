import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateSearchState, fetchDefinition} from '../actions/index'
import {Link} from 'react-router'

class SearchBar extends React.Component{
	constructor(props){
		super(props)
	}	
	searchSubmit(event){
		event.preventDefault()
		this.props.fetchDefinition(this.props.search_state)
	}
	render(){	
		return(
			<form className="ui fluid search" onSubmit={this.searchSubmit.bind(this)}>
			  <div className="ui fluid icon input">
			    <input className="prompt" type="text" placeholder="Define..." 
			    	onChange={(event) => this.props.updateSearchState(event.target.value)} 
			    	value={this.props.search_state}/>    
			    <i className="ui search icon"></i>
			  </div>
			  <div className="results"></div>
			</form>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({
		updateSearchState: updateSearchState,
		fetchDefinition: fetchDefinition
	}, dispatch)
}

var mapStateToProps= function(state){
	return({
		'search_state': state.search_state
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)