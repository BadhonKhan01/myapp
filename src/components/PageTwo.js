import React, { Component } from 'react';


// ==========================================
//      Connect Redux
// ==========================================
import { connect } from 'react-redux';
import { getAllUsers } from './../redux/actions/user_actions';

class PageTwo extends Component {


	componentDidMount(){
	    this.props.dispatch(getAllUsers())
	}

	render(){
		console.log(this.props)
		return(
			<React.Fragment>
			    <ul>
			    	{this.props.user.getAllUsers ?
			    		this.props.user.getAllUsers.map( item => (
			    			<li key={item.id}>{item.name}</li>
			    		) )
			    	:null}
			    </ul>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(PageTwo);