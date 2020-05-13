import React, { Component } from 'react';
import myContext from './myContext'
class SecondLevel extends Component {
	
	componentDidMount(){
		console.log("this",this.context)
	}

	render() {
	
	  return (
		<myContext.Consumer>
			{
			({count,changeColor})=>(
			    <div >
					<button onClick = {changeColor}>点击</button>
					<br/><span>{count}</span>
				</div> 
			)
			}
		</myContext.Consumer>
	  )	
	}
}
  
export default SecondLevel