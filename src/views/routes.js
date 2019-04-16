import React from 'react';
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import Index from './components/component_index'
import TestComponent from './components/component_test'

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Index} />
		<Route path="test" component={TestComponent} />
	</Route>
	
)