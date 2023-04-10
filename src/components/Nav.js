import React from 'react';


const Nav = (props) => {

  return (
    <nav className='container mt-3 pb-3'>
        <div className='row'>
            <div className='col-sm'>
                <a href="/About" onClick={(event) => 
                        {event.preventDefault(); props.handlePageChange('About')}} 
                        className={props.currentPage === 'About' ? 'nav-link focus' : 'nav-link'}>About Me</a>
            </div>

<div className='col-sm'>
                <a href="/Portfolio" onClick={(event) => 
                    {event.preventDefault(); props.handlePageChange('Portfolio')}} 
                    className={props.currentPage === 'Portfolio' ? 'nav-link focus' : 'nav-link'}>Portfolio</a>
</div>
<div className='col-sm'>
                <a href="/Contact" onClick={(event) => 
                    {event.preventDefault(); props.handlePageChange('Contact')}} 
                    className={props.currentPage === 'Contact' ? 'nav-link focus' : 'nav-link'}>Contact Me</a>
</div>
<div className='col-sm'>
                <a href="/Resume" onClick={(event) => 
                    {event.preventDefault(); props.handlePageChange('Resume')}} 
                    className={props.currentPage === 'Resume' ? 'nav-link focus' : 'nav-link'}>Resume</a>
</div>
    </div>
</nav>
  );
}

export default Nav;
