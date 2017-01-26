import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'

// TODO: Probably change to stateless component?
const InfoCard = function(props){
	var word = JSON.parse(props.word_definitions)
	var html = word.data.map((definition) => {
		return(
			<div className="ui left aligned content">
			  	<h2 className="">{definition.id}</h2>
			    <div className="meta">
			      <span>{definition.part_of_speech}</span>
			    </div>
			   
			    <div className="description">
			    	{definition.definitions}
			    </div>
			</div>
		)
	})
	return(
		<div className="ui ten wide one column">
			<div className={"ui fluid card"}>			  
			 {html}
			</div>
		</div>
	)
}

export default InfoCard