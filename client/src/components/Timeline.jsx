import React, { Component } from 'react';
import Chirp from './Chirp';

class Timeline extends Component {
    constructor(props){
        super(props);

        this.state = {
            chirps: [],
        }
    };
    
    componentDidMount(){

    }


   render() {
        <div>
            {props.chirps.map((chirp) => {
                return <Chirp
                            key={chirp.id}
                            author={chirp.author}
                            text={chirp.text}
                        />
            })}
        </div> 
   };
}
            
export default Timeline;