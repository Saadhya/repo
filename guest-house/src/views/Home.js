import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    // constructor(){
    //     super();

    //     this.getReservation = this.getReservation.bind(this);
    // }
    // getReservation=()=>{
    //     alert('hey user');
    // }
    render() {
        return (
            <div>
                            
                <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to IGNOU </h1>
                    <p className="col-md-12 fs-4">Click here for Guest House Reservation.</p>
                    <Link  className="btn btn-warning btn-lg"  to="/guest-form">
                        Get Reservation
                    </Link>

                    {/* <button className="btn btn-primary btn-lg" onClick={()=>this.getReservation} type="button">Get Reservation</button> */}
                </div>
                </div>
                
            </div>
        );
    }
}

export default Home;