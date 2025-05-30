import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../components/Loading';
import useAuth from '../hooks/useAuth';
import { ApplicationsPromise } from '../components/ApplicationsAPI';



const MyApplications = () => {

    const {user} = useAuth()

    return (
        <div>
            <ApplicationStats />

            <Suspense fallback={<Loading />}>
                <ApplicationList ApplicationsPromise={ApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;