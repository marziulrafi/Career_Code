import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import JobsList from '../components/JobsList';
import { JobsCreatedPromise } from '../components/JobsAPI';

const MyPostedJobs = () => {

    const {user} = useAuth()

    return (
        <div>
            <h2 className='text-center font-semibold text-3xl'>My Posted Jobs</h2>

            <Suspense>
                <JobsList JobsCreatedPromise = {JobsCreatedPromise(user.email)}></JobsList>
            </Suspense>

        </div>
    );
};

export default MyPostedJobs;