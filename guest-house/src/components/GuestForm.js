import React, { Component } from 'react';

class GuestForm extends Component {

    render() {
        return (
            <div >
                <br/>
                <div className='text-center'>
                    <h1 >
                        Guest House Registration for IGNOU
                    </h1>
                </div>

                <div className='container'>
                <p className='text-danger text-bold h4'>Please fill the form:-</p>

                <form>
                    <div className='row text-left'>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname" placeholder="first name" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="last name" required/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="issued-id" className="form-label">Govt. Issued- ID </label>
                                <input type="number" className="form-control" id="lastname" placeholder="issued-id"/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="dateofarrival" className="form-label">Date of Arrival </label>
                                <input type="date" className="form-control" id="lastname" placeholder="dateofarrival"/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="departureDate" className="form-label">Date of Departure </label>
                                <input type="date" className="form-control" id="lastname" placeholder="departureDate"/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label for="inputState" class="form-label">Country</label>
                                <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>United Kingdom</option>
                                <option>US</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <label htmlFor="person" className="form-label">Number of Persons</label>
                                <input type="number" className="form-control" id="lastname" placeholder="name@example.com"/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="mb-3">
                                <label htmlFor="request" className="form-label">Any special Request</label>
                                <textarea class="form-control" id="request" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='col-6'>
                            <label className="form-label">Payment Method</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Credit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                Debit
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row text-left'>
                        <div className='col-4'>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>                            
                        <div className='col-4'>
                            <button type="button" class="btn btn-danger">Cancel</button>                            
                        </div>
                        <div className='col-4'>
                            <button type="button" class="btn btn-warning">Reset</button>
                        </div>

                    </div>
                         
                </form>

                </div>
                               
                <div className="modal" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className='lead text-danger'>Please fill the form:-</p>
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
               

            </div>
        );
    }
}

export default GuestForm;