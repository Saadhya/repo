import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
             <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white" href="/">
                    {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="ignou" width="30" height="24" className="d-inline-block align-text-top"/> */}
                    IGNOU Assignment
                    </a>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;