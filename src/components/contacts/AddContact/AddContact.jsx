import React from 'react';
import { Link } from 'react-router-dom';

let AddContact = () => {
    return (
        <React.Fragment>
           <section className='add-contact p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className='h4 text-success fw-bold'>Create Contact</p>
                        <p className='fst-italic'>Here we add our contact information, complete this form for adding contact information about user.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <form>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Name'/>
                            </div>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Photo URL'/>
                            </div>
                            <div className='mb-2'>
                                <input type='number' className='form-control' placeholder='Mobile'/>
                            </div>
                            <div className='mb-2'>
                                <input type='email' className='form-control' placeholder='Email'/>
                            </div>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Company'/>
                            </div>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Title'/>
                            </div>
                            <div className='mb-2'>
                                <select className='form-control'>
                                    <option value="">Select a group</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <input type='submit' className='btn btn-success' value='Create'/>
                                <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    )
};

export default AddContact;