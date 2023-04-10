import React from 'react';

const Project = (props) => {
    return(
    <div className='container'>
        <div className='row'>
            {props.projects.map(item => (
            <div className='col-sm border rounded project-card'>
                <p className='text-center card-title' key={item.id}>{item.projectName}</p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <img className="card-image mb-1" src={item.img} alt={item.alt} />
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <span>
                                <a href={item.githubLink}><img className='footer-link mb-1' src={process.env.PUBLIC_URL + '/images/github-mark.png'} alt='github' /></a>
                                <a href={item.link} className='pl-2'>Live Project</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
};

export default Project;