import React from 'react';
import { Link } from 'react-router-dom';


let ContactList = () => {

    // let[state, setState]= useState({
    //     loading: false,
    //     contacts: [],
    //     errorMessage: ''
    // });
    
    // useEffect( () =>{
    //     try {
    //         setState({...state, loading:true});
    //         let response=  ContactService.getAllContacts();
    //         setState({
    //             ...state,
    //             loading:false,
    //             contacts:response.data
    //         });
    //     } catch (error) {
    //         setState({
    //             ...state,
    //             loading:false,
    //             errorMessage:error.message
    //         })
    //     }
    // }, []);

    // let {loading, contacts, errorMessage}=state;

    return (
        <React.Fragment>
        {/* <pre>{JSON.stringify(contacts)}</pre> */}
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className='h3 fw-bold'>Contact Manager <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                                    <i className='fa fa-plus-circle me-2' />New</Link></p>
                                <p> Contact Management System simplifies the task of managing contact information, enhances communication,
                                    and helps users build and maintain relationships more effectively. It is a valuable tool for businesses, sales teams, professionals,
                                    and anyone who needs to manage a large number of contacts efficiently.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='text' className='form-control' placeholder='Search Name' />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='submit' className='btn btn-outline-dark' value='Search' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact list'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4'>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                         alt='network issue' className='contact-img'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name : <span className='fw-bold'>Puneet Mishra</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Contact : <span className='fw-bold'>9889852706</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>puneet@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 d-flex flex-column align-items-center'>
                                        <Link to={'/contacts/view/:contactId'} className='btn btn-warning my-1'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/contacts/edit/:contactId'} className='btn btn-primary my-1'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger my-1'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohYgmNGCSc9el1gRPCUFDc56r_KiNcsNkvwvdzk-bmtoe4UfDbxmXaJrJ3xD_tA4ppfM&usqp=CAU"
                                         alt='network issue' className='contact-img'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name : <span className='fw-bold'>Jethalaal</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Contact : <span className='fw-bold'>9889852706</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>jethia@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 d-flex flex-column align-items-center'>
                                        <Link to={'/contacts/view/:contactId'} className='btn btn-warning my-1'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/contacts/edit/:contactId'} className='btn btn-primary my-1'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger my-1'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4'>
                                        <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                         alt='network issue' className='contact-img'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name : <span className='fw-bold'>Champak Chacha</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Contact : <span className='fw-bold'>9289852706</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>chachaji@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 d-flex flex-column align-items-center'>
                                        <Link to={'/contacts/view/:contactId'} className='btn btn-warning my-1'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/contacts/edit/:contactId'} className='btn btn-primary my-1'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger my-1'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4'>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                         alt='network issue' className='contact-img'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name : <span className='fw-bold'>Dr. Hathi</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Contact : <span className='fw-bold'>9189852706</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>hathiclinic@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 d-flex flex-column align-items-center'>
                                        <Link to={'/contacts/view/:contactId'} className='btn btn-warning my-1'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/contacts/edit/:contactId'} className='btn btn-primary my-1'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger my-1'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ContactList;