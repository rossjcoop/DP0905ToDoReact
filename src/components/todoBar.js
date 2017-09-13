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
    		<div className="bottomBar">
	    		<div>
		    		<Link to="/" className="link">All</Link>
		    	</div>
		    	<div>
		    		<Link to="/pending" className="link">Active</Link>
		    	</div>
		    	<div>
		    		<Link to="/completed" className="link">Complete</Link>
	    		</div>
	    		<div>  		
	    			<button onClick={this.handleClear} className="buttonLink">Clear Completes</button>
	    		</div>
	    		<div>
	    			{this.props.count} remaining.
	    		</div>
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