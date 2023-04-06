import React from 'react';
import Nav from './Navigation';

const Header = (props) => {
    // const handlePageChange = (page) => setCurrentPage(page);

    return(
    <div class="container-fluid">
        <div class="row header">
            <div class="col-sm">
                <p class="p-2">John Yeager</p>
            </div>
            <div class="col-sm">
            <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
            </div>
        </div>
    </div>
    )
};

export default Header;