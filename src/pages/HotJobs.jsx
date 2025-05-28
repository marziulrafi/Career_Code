import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise)

    return (
        <div>
            <h2 className='font-bold text-4xl text-center mb-7 mt-7'>Hot Jobs of the Day</h2>
            <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;