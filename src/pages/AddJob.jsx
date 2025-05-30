import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2>Add a Job</h2>
            <form>
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
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
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
                            <input type="number" name='minSalary' className="input" placeholder="" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="number" name='maxSalary' className="input" placeholder="" />

                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name='category' className="select">
                                <option disabled={true}>Select a Currency"</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>


                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;