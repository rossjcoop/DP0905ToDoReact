import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { clearComplete } from '../actions/todo'
import { connect } from 'react-redux'

class todoBar extends Component {

	handleClear = (e) => {
		clearComplete()
	}



  render() {
    return (
    	<div className="container">
    		<div>
    			{this.props.count} items need to be completed.
    		</div>
    		<div>
	    		<Link to="/" className="link">All</Link>
	    		<Link to="/pending" className="link">Active</Link>
	    		<Link to="/completed" className="link">Complete</Link>
    		</div>
    		<div>  		
    			<button onClick={this.handleClear}>Clear All</button>
    		</div>
    	</div>     
    )
  }
}



function mapStateToProps(appState){
	return {
		count: appState.todos.filter(todo => todo.status === 'pending').length
	}
}

export default connect(mapStateToProps)(todoBar)