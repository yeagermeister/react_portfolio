import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
// import Nav from './Navigation';
import Header from './Header';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }
  