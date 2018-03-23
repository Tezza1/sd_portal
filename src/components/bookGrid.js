import React, { Component } from 'react';

class BookGrid extends Component {

    render() {
        return(
            <div>
                <div className="row card_row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 250}}>
                            <img className="card-img-top" src={require('../images/1507968836.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title">Level 1</h4>
                                <p className="card-text">The introductory level of Berlitz English. For <span className="font-weight-bold">beginner</span> language ability.</p>
                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#myModal">See text</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 250}}>
                            <img className="card-img-top" src={require('../images/1507968836.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title">Level 1</h4>
                                <p className="card-text">The introductory level of Berlitz English. For <span className="font-weight-bold">beginner</span> language ability.</p>
                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#myModal">See text</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: 250}}>
                            <img className="card-img-top" src={require('../images/1507968836.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title">Level 1</h4>
                                <p className="card-text">The introductory level of Berlitz English. For <span className="font-weight-bold">beginner</span> language ability.</p>
                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#myModal">See text</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookGrid; 