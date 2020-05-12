import React, { Component } from 'react';

class ThemedButton extends Component {
	// 指定 contextType 读取当前的 theme context。
	// React 会往上找到最近的 theme Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。
	static contextType = ThemeContext;
	componentDidMount(){
		console.log("this",this.context.value)
	}
	render() {
	  return <div>{111}</div>;
	}
}

export default ThemedButton