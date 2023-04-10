import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    return(
    <div className="container">
        <div className="row header">
            <div className="col-sm">
                <p className="p-2 intro">John Yeager</p>
            </div>
            <div className="col-sm">
            <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
            </div>
        </div>
    </div>
    )
};

export default Header;