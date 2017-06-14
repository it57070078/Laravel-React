import React from 'react';


function Header () {
    return (
        <div className="container">
                <nav className="navbar navbar-default">
                    <a className="navbar-brand">
                        Task List
                    </a>
                    <div className="col-md-4">
                        <div className="text-right">
                            <button type="button" className="btn btn-default btn-md">
                            <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> 
                            </button>  
                        </div> 
                    </div>
                </nav>
        </div>
    );
}


export default Header