import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const ApplyJob = () => {

    const { id: jobID } = useParams()
    const { user } = useAuth()


    const handleApply = e => {
        e.preventDefault()

        const form = e.target
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
    }

    return (
        <div className='text-center mt-8 mb-8'>
            <h3 className='text-3xl mb-8 font-semibold'>Apply for this Job - <Link className='text-blue-600 underline' to={`/jobs/${jobID}`}>Details</Link></h3>

            <form onSubmit={handleApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                
                    <label className="label">LinkedIn</label>
                    <input type="url" name='linkedin' className="input" placeholder="LinkedIn Profile Link" />
                    <label className="label">Github</label>
                    <input type="url" name='github' className="input" placeholder="Github Profile Link" />
                    <label className="label">Resume</label>
                    <input type="url" name='resume' className="input" placeholder="Resume Link" />

                    <input type="submit" value="Apply" className='btn' />
        
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyJob;