import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          email: '',
          issuedId:'',
          arrivalDate:'',
          departureDate:'',
          country:'',
          numOfPerson:'',
          specialRequest:'',
          paymentMethod:'',

          error:'',
          emailValid:false,
          textValid:false,
          formValid:false,
        }

        this.getReservation = this.getReservation.bind(this);
        this.validateField = this.validateField.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
      }      
    handleUserInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState({[name]: value});
        // this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    getReservation=()=>{
        alert('hey user');
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    validateField=(fieldName, value)=>{
        let fieldValidationErrors = this.state.formErrors;
        let error = this.state.error;
        let emailValid = this.state.emailValid;
        let textValid = this.state.textValid;
        let formValid = this.state.formValid;
        // let passwordValid = this.state.passwordValid;
        
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                error = 'Email is invalid!';
                // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'firstname':
                if(value==''){
                    this.setState({
                        error: 'Please enter the required value!'
                    })
                    // error = 'Please enter the required value';
                }
                break;
            case 'lastname':
                if(value==''){
                    this.setState({
                        error: 'Please enter the required value!'
                    })
                }
            case 'issuedId':
                if(value==''){
                    // this.setState({
                    //     error: 'Please enter the required value!'
                    // })
                    error = 'Please enter the required issue id';
                }
                break;
            case 'arrivalDate':
            case 'departureDate':
            case 'country':
            case 'numOfPerson':
            case 'specialRequest':
            case 'paymentMethod':
          
        //   case 'number':
        //     passwordValid = value.length >= 6;
        //     fieldValidationErrors.password = passwordValid ? '': ' is too short';
        //     break;
      
        
        default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        // passwordValid: passwordValid
                      }, this.validateForm);
      
    }

    render() {
        var countries=[
            "India", 
            "Indonesia", 
            "Germany", 
            "Japan", 
            "United States", 
        ]
        return (
            <div >
                 <form>
                    <div className='row text-left'>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" 
                                id="firstname" placeholder="first name"
                                name='firstname'
                                value={this.state.firstname}
                                onChange={()=>this.handleUserInput}
                                srequired/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control"
                                id="lastname" placeholder="last name"
                                name='lastname'
                                value={this.state.lastname}
                                onChange={()=>this.handleUserInput}
                                required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control"
                                id="email" placeholder="name@example.com"
                                name='email'
                                value={this.state.email}
                                onChange={()=>this.handleUserInput}
                                 required/>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="issued-id" className="form-label">Govt. Issued- ID </label>
                                <input type="number" className="form-control" 
                                id="issued-id" placeholder="issued-id" 
                                name='issuedId'
                                value={this.state.issuedId}
                                onChange={()=>this.handleUserInput}
                                required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="dateofarrival" className="form-label">Date of Arrival<span className='text-danger'></span>* </label>
                                <input type="date" className="form-control" 
                                name='dateOfArrival'
                                value={this.state.arrivalDate}
                                onChange={()=>this.handleUserInput}
                                id="dateofarrival" placeholder="dateofarrival" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="departureDate" className="form-label">Date of Departure* </label>
                                <input type="date" className="form-control" 
                                    name='departureDate'
                                    value={this.state.departureDate}
                                    onChange={()=>this.handleUserInput}
                                    id="departureDate" placeholder="Departure Date" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select id="country" className="form-select" 
                                name='country'
                                value={this.state.country}
                                onChange={()=>this.handleUserInput}
                                // defaultValue="Indonesia"
                                required>
                                    {countries.map((key, i)=>(
                                        <option value={key} key={key}>{key}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="person" className="form-label">Number of Persons</label>
                                <input type="number" className="form-control" 
                                name='numOfPerson'
                                value={this.state.numOfPerson}
                                onChange={()=>this.handleUserInput}
                                id="person" placeholder="Number of Persons" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="request" className="form-label">Any special Request</label>
                                <textarea className="form-control" id="request" 
                                name='specialRequest'
                                placeholder='Enter your special request'
                                value={this.state.specialRequest}
                                onChange={()=>this.handleUserInput}
                                rows="3" required></textarea>
                            </div>
                        </div>
                        <div className='col-6'>
                            <label className="form-label">Payment Method</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" 
                                    value={this.state.paymentMethod}
                                    onChange={()=>this.handleUserInput}
                                    id="credit" required checked/>
                                <label className="form-check-label" htmlFor="credit">
                                    Credit
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" 
                                    value={this.state.paymentMethod}
                                    onChange={()=>this.handleUserInput}
                                    id="debit" required checked/>
                                <label className="form-check-label" htmlFor="debit">
                                    Debit
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row text-left'>
                        <div className='col-4'>
                            <button type="submit" className="btn btn-primary btn-lg"
                            onSubmit={()=>this.getReservation}>Submit</button>
                        </div>                            
                        <div className='col-4'>
                            <Link className="btn btn-danger btn-lg"  to="/">
                                Cancel
                            </Link>                                              
                        </div>
                        <div className='col-4'>
                            <button type="reset" className="btn btn-warning btn-lg" >
                                Reset
                            </button>       
                            {/* <button type="button" className="btn btn-warning btn-lg" onClick={()=>}>Reset</button> */}
                        </div>

                    </div>                         
                </form>

            </div>
        );
    }
}

export default GuestForm;