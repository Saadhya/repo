import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankPage extends Component {
    render() {
        return (
            <div>
                <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Thank You!! </h1>
                    <p className="col-md-12 fs-4">Would love to see you again.</p>
                    <Link  className="btn btn-warning btn-lg"  to="/">
                        Home
                    </Link>
                </div>
                </div>
               
                
            </div>
        );
    }
}

export default ThankPage;