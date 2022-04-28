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
          isError: false,
          message:'',
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
        // this.setState({[name]: value});
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    getReservation=(e)=>{
        e.preventDefault();
        // alert('hey user');

        fetch(
            "http://localhost:8080/user/create")
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    this.setState({
                        message: "Data saved successfully!"
                    });
                },
                (error)=>{
                    console.log(error)
                    this.setState({
                        isError: true,
                        error: "Data did not save :("
                    });
                })
                // .catch(err)={
                //     // console.log(err)
                // }
    }

    // validateForm() {
    //     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    // }
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
                error = emailValid? '':'Email is invalid!' ;
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
        // this.setState({
        //     isError: true,
        //     error: 'error'
        // });
        // formErrors: fieldValidationErrors,
            // emailValid: emailValid,
                        // passwordValid: passwordValid
                    //   }, this.validateForm);
      
    }

    render() {
        const {isError, error, message} = this.state;
        var countries=[
            "choose....",
            "India", 
            "Indonesia", 
            "Germany", 
            "Japan", 
            "United States", 
        ]
        return (
            <div >
                <p className='text-danger text-center  text-bold'>
                    {/* show error here */}
                    {isError? error: message}
                </p>
                 <form>
                    <div className='row text-left'>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" 
                                id="firstname" placeholder="first name"
                                name='firstname'
                                value={this.state.firstname}
                                // onKeyDown={(e)=> console.log(e)}
                                onChange={(e)=>this.handleUserInput(e)}
                                required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control"
                                id="lastname" placeholder="Last Name"
                                name='lastname'
                                value={this.state.lastname}
                                onChange={(e)=>this.handleUserInput(e)}
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
                                onChange={(e)=>this.handleUserInput(e)}
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
                                onChange={(e)=>this.handleUserInput(e)}
                                // required
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="dateofarrival" className="form-label">Date of Arrival<span className='text-danger'></span>* </label>
                                <input type="date" className="form-control" 
                                name='arrivalDate'
                                value={this.state.arrivalDate}
                                onChange={(e)=>this.handleUserInput(e)}
                                id="dateofarrival" placeholder="dateofarrival" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="departureDate" className="form-label">Date of Departure* </label>
                                <input type="date" className="form-control" 
                                    name='departureDate'
                                    value={this.state.departureDate}
                                    onChange={(e)=>this.handleUserInput(e)}
                                    id="departureDate" placeholder="Departure Date" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select id="country" className="form-select" 
                                name='country'
                                value={this.state.country}
                                onChange={(e)=>this.handleUserInput(e)}
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
                                onChange={(e)=>this.handleUserInput(e)}
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
                                onChange={(e)=>this.handleUserInput(e)}
                                rows="3" required></textarea>
                            </div>
                        </div>
                        <div className='col-6'>
                            <label className="form-label">Payment Method</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" 
                                    value={'Credit'}
                                    onChange={(e)=>this.handleUserInput(e)}
                                    id="credit" required/>
                                <label className="form-check-label" htmlFor="credit">
                                    Credit
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" 
                                    value={'Debit'}
                                    onChange={(e)=>this.handleUserInput(e)}
                                    id="debit" required />
                                <label className="form-check-label" htmlFor="debit">
                                    Debit
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row text-left'>
                        <div className='col-4'>
                            <button type="submit" className="btn btn-primary btn-lg"
                            onClick={this.getReservation}
                            // onSubmit={(e)=>this.getReservation(e)}
                            >Submit</button>
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