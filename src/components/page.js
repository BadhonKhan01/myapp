import React,{ useEffect } from 'react';

// ===================================
//  Load Redux
// ===================================
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './../redux/actions/user_actions';

const Page = (props) => {

	//*-------------------------------*/
	//   @Load Data
	//--------------------------------*/  
	const dispatch = useDispatch();
	const user = useSelector( state => state.user )
	useEffect(() => {
	    dispatch(getAllUsers())

	}, [])

    return (
        <React.Fragment>
            <ul>
            	{user.getAllUsers ?
            		user.getAllUsers.map( item => (
            			<li key={item.id}>{item.name}</li>
            		) )
            	:null}
            </ul>
        </React.Fragment>
    );
};

export default Page;