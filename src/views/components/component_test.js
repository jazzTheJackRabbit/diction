import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'

import {getImages} from '../actions/index'

var ImageCard = function(props){
	var imageUrl = props.imageUrl ? props.imageUrl : "static/images/wireframe.png"
	return(
		<div className="column">
			<div className="ui fluid card">
				<div className="image">
					<img src={imageUrl}/>
				</div>
				<div className="content">
					<a className="header">Image</a>
				</div>
			</div>
		</div>
	)
}

var renderHelper = function(props){
	var html = []
	for(var i=0; i<9; i++){
		html.push(<ImageCard key={i} imageUrl={props.images ? props.images.result[i] : null}/>)
	}
	return html
}

class TestComponent extends React.Component{
	componentDidMount(){
		// this.props.getImages()
	}
	render(){	
		return(
			<div className="ui sixteen wide column">
				<div className="ui hidden divider"></div>
				<button className="ui button" onClick={()=>this.props.getImages()}>Get Images</button>
				<div className="ui three column grid">
					{renderHelper(this.props)}
				</div>
			</div>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({
		getImages: getImages
	},dispatch)
}

var mapStateToProps = function(state){	
	console.log(state.images)
	return({
		images: state.images
	})
}


export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)