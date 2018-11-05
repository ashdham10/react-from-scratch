import React, { Component } from 'react';
import { render } from 'react-dom';
import Timeline from './Timeline';

class Home extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <form class="col-md-12 bg-info mb-4">
                            <div class="form-group col-md-12">
                                <label class="text-light mt-3" for="author">Chirp Author</label>
                                <input type="chirp-author" class="form-control" id="chirpAuthor" aria-describedby="chirpAuthor" placeholder="User Name" />
                            </div>
                            <div class="form-group col-md-12">
                                <label class="text-light" for="chirpSpace">Chirp Here!</label>
                                <input type="chirp" class="form-control" id="chirpSpace" placeholder="CHIRP! CHIRP! CHIRP!" />
                            </div>
                            <button type="submit" id="chirpButton" class="btn btn-outline-light btn-sm mb-3 ml-3">Chirp!</button>
                        </form>
                    </div>
                </div>
                <Timeline />
            </React.Fragment>
        );
    };
};

export default Home;