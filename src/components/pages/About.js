import React from 'react';

export default function About() {
  return (
    <div className='container'>
      <img className='border-dark rounded m-1 profile-pic' src={process.env.PUBLIC_URL + '/images/profile-pic.JPG'} alt='profile'/>
      <div className='row'>
        <div className='col-sm'>
          <p className='p-1'>
          I have 30 years of experience in the telecommunications industry. I currently work at Lumen Technologies, managing a team of network engineers resonsible for traffic engineering and network diversity on the world's largest network. Over the last two years, we have been transforming my department to be on the forefront of network automation, utilizing Itential, Ansible, Python and Perl to automate common network tasks. Most automations utilize the web as a front end. Understanding full stack development will allow me to lead this team succesfully into the future.
          </p>
        </div>
      </div>
    </div>
  );
}
