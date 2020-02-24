import React,{ useState } from 'react';

// ===================================
//  Load Components
// ===================================
import FormField from './utils/formFields';
import { update, generateData, isFormValid } from './utils/mixFunction';



const Form = () => {

	/*--------------------------------------
	|--- @Form States
	--------------------------------------*/
	const [ formdata, setFormdata ] = useState({
	    username: {
	        element: 'input',
	        value: '',
	        config: {
	            name:'username_input',
	            type:'text',
	            className: 'form-control',
	            placeholder:'Username',
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    age: {
	        element: 'input',
	        value: '',
	        config: {
	            name:'age_input',
	            type:'text',
	            className: 'form-control',
	            placeholder:'age',
	        },
	        validation: {
	            required: false
	        },
	        valid: true,
	        validationMessage: ''
	    },
	    email: {
	        element: 'input',
	        value: '',
	        config: {
	            name:'email_input',
	            type:'email',
	            className: 'form-control',
	            placeholder:'Email',
	        },
	        validation: {
	            required: true,
	            email: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    gender: {
	        element: 'select',
	        value: '',
	        config: {
	            name: 'gender_select',
	            type: 'select',
	            className: 'custom-select',
	            options: [
	                { key: '', value: 'Select Option' },
	                { key: 'male', value: 'Male' },
	                { key: 'female', value: 'Female' },
	            ]
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    phone: {
	        element: 'input',
	        value: '',
	        config: {
	            name:'phone_input',
	            type:'text',
	            className: 'form-control',
	            placeholder:'Phone',
	        },
	        validation: {
	            required: false
	        },
	        valid: true,
	        validationMessage: ''
	    },
	    address: {
	        element: 'textarea',
	        value: '',
	        config: {
	            name:'address_input',
	            type:'text',
	            rows: '5',
	            className: 'form-control',
	            placeholder:'address',
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    role: {
	        element: 'select',
	        value: '',
	        config: {
	            name: 'role_select',
	            type: 'select',
	            className: 'custom-select',
	            options: [
	                { key: '', value: 'Select Option' },
	                { key: 'subscriber', value: 'Subscriber' },
	                { key: 'contributor', value: 'Contributor' },
	                { key: 'author', value: 'Author' },
	                { key: 'editor', value: 'Editor' },
	                { key: 'administrator', value: 'Administrator' }
	            ]
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    status: {
	        element: 'select',
	        value: '',
	        config: {
	            name: 'status_select',
	            type: 'select',
	            className: 'custom-select',
	            options: [
	                { key: '', value: 'Select Option' },
	                { key: 'active', value: 'Active' },
	                { key: 'deactivate', value: 'Deactivate' },
	                { key: 'processing', value: 'Processing' }
	            ]
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    password: {
	        element: 'input',
	        value: '',
	        config: {
	            name: 'password_input',
	            type: 'password',
	            className: 'form-control',
	            placeholder: 'Enter you password',
	        },
	        validation: {
	            required: true
	        },
	        valid: false,
	        validationMessage: ''
	    },
	    confirmPassword: {
	        element: 'input',
	        value: '',
	        config: {
	            name: 'password_input',
	            type: 'password',
	            className: 'form-control',
	            placeholder: 'Confirm password',
	        },
	        validation: {
	            required: true,
	            confirm: 'password'
	        },
	        valid: false,
	        validationMessage: ''
	    }
	})



/*--------------------------------------
|--- @Form Input Update Form Function
--------------------------------------*/
const updateForm = (element, content = '') => {
    const newFormData = update(element, content, formdata);
    setFormdata(newFormData);
}

/*--------------------------------------
|--- @Form Submit Function
--------------------------------------*/
const submitForm = async event => {
    event.preventDefault();
    
    //*----------------------------------------------*/
    //---@Generate From Template & Check Validation
    //-----------------------------------------------*/
    const dataToSubmit = generateData(formdata);
    const formIsValid = isFormValid(formdata);

    //*----------------------------------------*/
    //---@Check Form Data exist
    //-----------------------------------------*/
    if (formIsValid) {
        
    	console.log(dataToSubmit)

    }
}


	return(
		<React.Fragment>
			

			{/* -----------------------------
			||---@Profile Form
			----------------------------- */}
			<form onSubmit={(event) => submitForm(event)} className="row">

			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Username:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'username'}
			            formdata={formdata.username}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Age:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'age'}
			            formdata={formdata.age}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Gender:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'gender'}
			            formdata={formdata.gender}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Phone:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'phone'}
			            formdata={formdata.phone}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-12">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Address:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'address'}
			            formdata={formdata.address}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-12">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Email:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'email'}
			            formdata={formdata.email}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Role:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'role'}
			            formdata={formdata.role}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>States:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'status'}
			            formdata={formdata.status}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Password:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'password'}
			            formdata={formdata.password}
			            change={(element) => updateForm(element)}
			        />
			    </div>
			    <div className="form-group col-md-6">
			        <label htmlFor="image-name" className="col-form-label">
			            <small>
			                <strong>Confirm Password:</strong>
			            </small>
			        </label>
			        <FormField
			            id={'confirmPassword'}
			            formdata={formdata.confirmPassword}
			            change={(element) => updateForm(element)}
			        />
			    </div>

			    <div className="col-md-6 pt-4">
			        <button type="button" className="btn btn-primary" onClick={(event) => submitForm(event)}>Save</button>
			    </div>
			</form>



		</React.Fragment>
	);
};

export default Form;