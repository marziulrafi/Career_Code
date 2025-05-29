import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { _id, title, location, requirements, salaryRange, description, company, company_logo } = job

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-3 mb-14">
            <div className='flex gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="" />
                </figure>
                <div>
                    <h3 className="text-2xl font-bold">{company}</h3>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p className='font-semibold'>Salary : {salaryRange.min} - {salaryRange.max} BDT.</p>
                <div className="card-actions mb-2">
                    {
                        requirements.map((skill, index) =>
                            <div key={index} className="badge badge-outline">{skill}</div>
                        )
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;