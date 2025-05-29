import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { title, company, _id } = useLoaderData()


    return (
        <div>
            <h2 className="text-4xl font-bold"><span className='font-semibold'>Job Details of : </span>{title}</h2>
            <h2 className="text-2xl font-semibold">{company}</h2>
            <Link to={`/applyjob/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;