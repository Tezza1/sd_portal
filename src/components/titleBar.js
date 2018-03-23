import React from 'react';

const TitleBar = (props) => {
    return (
        <div className="jumbotron">
          <h1>{props.title}</h1>
        </div>
    );
}

export default TitleBar;