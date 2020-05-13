import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ThemedButton extends Component {
	// 指定 contextType 读取当前的 theme context。
	// React 会往上找到最近的 theme Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。
	componentDidMount(){
		console.log("this",this.context)
	}
	// static contextTypes = {
	// 	color: PropTypes.string.isRequired,
	// 	size: PropTypes.number.isRequired
	// }
	render() {
	  return (
		
			<div>
				{
				this.context.color
				}
			</div>
	  )	
	}
}
ThemedButton.contextTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired
}
  
export default ThemedButton