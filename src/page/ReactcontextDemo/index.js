import React, { Component } from 'react';
import Toolbar from './Toolbar'
const ThemeContext = React.createContext('light');
class ReactcontextDemo extends Component {
	state={
		visible: false,
		context: null
	}
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
		// 无论多深，任何组件都能读取这个值。
		// 在这个例子中，我们将 “dark” 作为当前的值传递下去。
		return (
		  <ThemeContext.Provider value="dark">
			<Toolbar />
		  </ThemeContext.Provider>
		);
	}
	
	componentDidMount() {
	  	console.log("About渲染完毕")
	}
	
}


export default ReactcontextDemo