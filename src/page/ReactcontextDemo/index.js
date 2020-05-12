import React, { Component } from 'react';

class ReactcontextDemo extends Component {
	state={
		visible: false,
		context: null
	}
	render() {
		return (
			<div>
		       ReactcontextDemo
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("About渲染完毕")
	}
	
}


export default ReactcontextDemo