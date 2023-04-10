import React from 'react';

export default function Resume() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <p>Please download my&nbsp;
              <a href={process.env.PUBLIC_URL + '/files/resume.txt'}>resume.</a>
            </p>
            <ul>
              <li className='li-header'>Networking Proficiencies</li>
              <li>Cisco, Juniper and Alcatel Routers</li>
              <li>BGP, ISIS, OSPF, RSVP, MEF</li>
              <li>DNS</li>
              <li>Capacity management across backbones and peering points</li>
            </ul>
            <ul>
              <li className='li-header'>Fullstack Proficiencies</li>
              <li>HTML, CSS, Javascript</li>
              <li>Node, Express, React</li>
              <li>Mysql, Mongo</li>
              <li>Bootstrap, Tailwinds, reponsive design</li>
            </ul>
            <ul>
              <li className='li-header'>Other Proficiencies</li>
              <li>20 years experience as a technical manager</li>
              <li>Six Sigma Greenbelt</li>
              <li>Jira, Teams, Sharepoint</li>
              <li>Itential Automation Platform</li>
              <li>US Army - Multichannel Transmission Systems Operator/Maintainer - 4 year enlistment</li>
              <li>American Legion Post 291 Adjutant </li>
              <li>Attendes the Pennsylvania State University</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }