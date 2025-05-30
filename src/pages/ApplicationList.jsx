import React, { use } from 'react';
import { ApplicationsPromise } from '../components/ApplicationsAPI';
import ApplicationRow from '../components/ApplicationRow';

const ApplicationList = ({ ApplicationsPromise }) => {
    const applications = use(ApplicationsPromise)
    return (
        <div>
            <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <ApplicationRow
                                key={application._id}
                                index={index}
                                application={application}
                            ></ApplicationRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ApplicationList;