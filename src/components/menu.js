import React, { Component } from 'react';

class MenuBar extends Component {
    menuStyle = {
        marginTop: 24,
        marginBottom: 24, 
        marginLeft: 0,
        marginRight: 0
    }
    
    menuItems = ["Video", "Materials", "Other", "Other"];
    
    render () {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={this.menuStyle}>
                    <a className="navbar-brand">
                        <img src={require('../images/Berlitz_logo.png')} alt="Logo" style={{width: 130,}}></img>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav mr-auto">
                            {this.menuItems.map((item) => {
                                return (
                                    <li className="nav-item">
                                        <a className="nav-link">{item}</a>
                                    </li>
                                );
                            })};
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-primary my-2 my-sm-0" type="button">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
};

export default MenuBar; 

