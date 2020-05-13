import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar'
class ReactcontextDemo extends Component {
	// static childContextTypes = {
	// 	color: PropTypes.string.isRequired,
	// 	size: PropTypes.number.isRequired
	// }
	getChildContext() {
		return { color: 'red', size: 20 }
	}
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
		// 无论多深，任何组件都能读取这个值。
		// 在这个例子中，我们将 “dark” 作为当前的值传递下去。
		return (
			<Toolbar />
		);
	}
	
}

ReactcontextDemo.childContextTypes = {
		color: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired
}

export default ReactcontextDemo