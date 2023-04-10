import React from 'react';

const Footer = () => {
    return(
    <>
    <div className='container footer'>
        <div className='row'>
            <div className='col'>
            <p><a href='https://github.com/yeagermeister/'><img className='footer-link' src={process.env.PUBLIC_URL + '/images/github-mark.png'} alt='github logo'/></a></p>
            </div>
            <div className='col'>
            <p><a href='https://stackoverflow.com/users/20295346/yeagermeister'><img className='footer-link' src={process.env.PUBLIC_URL + '/images/stackoverflow.png'} alt='StackOverflow logo'/></a></p>
            </div>
            <div className='col'>
            <p><a href={process.env.PUBLIC_URL}><img className='footer-link' src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt='Linked In logo'/></a></p>
            </div>
        </div>
    </div>
    </>
    )
};

export default Footer;