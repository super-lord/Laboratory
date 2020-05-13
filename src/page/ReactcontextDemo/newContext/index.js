import React, { Component } from 'react';
import FirstLevel from './FirstLevel'
import myContext from './myContext'
class ReactcontextDemo extends Component {
	
	constructor(props) {
		super(props);
		// State 也包含了更新函数，因此它会被传递进 context provider。
		this.state = {
			count: 0,
			changeColor: this.changeColor,
		};
	}
	changeColor = () => {
		let count = this.state.count;
		count++;
		this.setState({count})
	};
	componentDidMount(){

	}
	render() {
		return (
		<myContext.Provider value={this.state}>
			<FirstLevel />
		  </myContext.Provider>
		);
	}
}
export default ReactcontextDemo