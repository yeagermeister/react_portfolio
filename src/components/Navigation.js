import React from 'react';

const Nav = (props) => {
    return (
    <div class="container-fluid">


<ul className="nav">
<li className="nav-item">
  <a
    href="#about"
    onClick={() => props.handlePageChange('About')}
    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={props.currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  >
    About
  </a>
</li>
<li className="nav-item">
  <a
    href="#portfolio"
    onClick={() => props.handlePageChange('Portfolio')}
    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
  >
    Portfolio
  </a>
</li>
<li className="nav-item">
  <a
    href="#contact"
    onClick={() => props.handlePageChange('Contact')}
    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
  >
    Contact
  </a>
</li>
<li className="nav-item">
  <a
    href="#resume"
    onClick={() => props.handlePageChange('Resume')}
    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
  >
    Resume
  </a>
</li>
</ul>
</div>
    )
};

export default Nav;