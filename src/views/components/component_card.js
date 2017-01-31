import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'

// TODO: Probably change to stateless component?
const InfoCard = function(props){
	var word = JSON.parse(props.word_definitions).data['definition_sets']
	var html = word.map((definition) => {
		var definitions = definition.definitions.map(defn=>{
			defn = defn.trim()
			if(defn[0] == ":"){
				defn = defn.slice(1)				
			}

			if(defn.length){
				return(
					<li>{defn}</li>
				)
			}			
		})
		return(
			<div className="ui left aligned content">
			  	<h2 className="">{definition.id}</h2>
			    <div className="meta">
			      <p>{definition.part_of_speech}</p>
			    </div>
			   
			    <div className="description">
			    	<ul>
			    	{definitions}
			    	</ul>
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