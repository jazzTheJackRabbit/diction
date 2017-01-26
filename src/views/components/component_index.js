import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import InfoCard from './component_card'
import SearchBar from './component_search_bar'

class Index extends React.Component{
	render(){	
		var words_set = JSON.parse(this.props.words_set)		
		var html = words_set.map((word_definitions)=>{
			return(
				<InfoCard word_definitions={JSON.stringify(word_definitions)}/>
			)
		})	

		console.log(html)
		return(
			<div className="ui sixteen wide column">
				<div className="ui hidden divider"></div>
					<SearchBar />
				<div className="ui hidden divider"></div>
				<div className="ui hidden divider"></div>
				<div className="ui center aligned grid">
				{html}
				</div>
			</div>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({
	},dispatch)
}

var mapStateToProps = function(state){	
	return({
		words_set: JSON.stringify(state.definitions),
	})
}


export default connect(mapStateToProps)(Index)