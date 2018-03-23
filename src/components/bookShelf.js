import React from 'react';
import BookGrid from './bookGrid';

const BookShelf = () => {
    const shelfTitles = [
        {
            title: "Berlitz English",
            category: "Language"
        },
        {
            title: "Berlitz Talent Growth",
            category: "Communication, Inter-culture, Language"
        },
        {
            title: "Other",
            category: "Miscellaneous"
        }
    ];
    
    return(
        <div>
            {shelfTitles.map((title) => {
                return (
                    <div>
                        <div className="container-fluid" style={{
                            marginTop: 20,
                            marginBottom: 20
                        }}>
                            <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8">
                                    <h2 className="text-left"><small>{title.title}</small></h2><span className="badge badge-primary" style={{float: "left"}}>{title.category}</span>
                                    <hr />
                                </div>
                            </div>
                        </div> 
                        <div className="container-fluid">
                            <BookGrid />
                        </div>
                    </div>
                );
            })};
        </div>
    );
}

export default BookShelf;