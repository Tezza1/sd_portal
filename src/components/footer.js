import React from 'react';

const Footer = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">
                    <img src={require('../images/Berlitz_logo.png')} alt="Logo" style={{width: 130,}}></img>
                </a>
                <a className="navbar-brand" style={{color: "white"}}>
                    &copy; Berlitz Japan 2018                       
                </a>
            </nav>
        </div>
    );
};

export default Footer;