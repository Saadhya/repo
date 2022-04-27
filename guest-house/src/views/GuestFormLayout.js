import React, { Component } from 'react';
import GuestForm from '../components/GuestForm';

class GuestFormLayout extends Component {
    render() {
        return (
            <div>
                 <br/>
                <div className='text-center'>
                    <h1 >
                        Guest House Registration for IGNOU
                    </h1>
                </div>

                <div className='container' style={{textAlign: 'left'}}>
                    {/* <p className='text-secondary text-bold h4'>Please fill the form:-</p> */}
                    
                    <p className='text-danger text-center  text-bold'>
                        {/* show error here */}
                    </p>
                    <div className='p-2 mb-4'>
                        <GuestForm />
                    </div>
                   
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

export default GuestFormLayout;