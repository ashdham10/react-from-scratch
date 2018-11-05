import React from 'react';

const Chirp = (props) => {
    return (
         <div className="card" style={{width: '18rem', margin: '5px'}}>
            <div className="card-body">
                <h5 className="card-title">Chirp {props.id}</h5>
                <p className="card-text">{props.author}</p>
                <p className="card-text">{props.text}</p>
                </div>
      </div> 
    );
}

export default Chirp;