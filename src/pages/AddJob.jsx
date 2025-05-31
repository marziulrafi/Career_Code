import React from 'react';
import useAuth from '../hooks/useAuth';
const AddJob = () => {

    const {user} = useAuth()

    const handleAddJob = e => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        // console.log(data);


        const {min, max, currency, ...newJob} = data
        newJob.salaryRange = {min, max, currency}



        newJob.requirements = newJob.requirements.split()


        console.log(newJob);
    }


    return (
        <div>
            <h2>Add a Job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company" />
                    <label className="label">Company Logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Logo URL" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />
                </fieldset>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value="On-Site" aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                    </div>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="datetime-local" className="input" />

                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="number" name='min' className="input" placeholder="" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="number" name='max' className="input" placeholder="" />

                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name='currency' className="select">
                                <option disabled={true}>Select a Currency"</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </fieldset>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>

                    <textarea className="textarea" name='description' placeholder="Description"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Requirements"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Responsibilities"></textarea>
                </fieldset>



                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' className="input" defaultValue={user.email} readOnly placeholder="HR Email" />
                  
                </fieldset>

                <input type="submit" className='btn' value="Add Job" />



            </form>
        </div>
    );
};

export default AddJob;