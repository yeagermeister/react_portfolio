import React from 'react';
import Nav from './Navigation';

const Header = (props) => {
    // const handlePageChange = (page) => setCurrentPage(page);

    return(
    <div className="container-fluid">
        <div className="row header">
            <div className="col-sm">
                <p className="p-2">John Yeager</p>
            </div>
            <div className="col-sm">
            <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
            </div>
        </div>
    </div>
    )
};

export default Header;