import React, { Component } from 'react';
import SecondLevel from './SecondLevel'
class FirstLevel extends Component {
	
	render() {
	  return <SecondLevel />
	}
}
export default FirstLevel