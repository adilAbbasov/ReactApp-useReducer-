import React, { useState } from 'react'
import User from './User'
import UserConsumer from './context';

export default function Users() {
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [id, setId] = useState(4);

    const AddUser = (dispatch, e) => {
        const user = {
            id: id,
            name: name,
            department: department,
            salary: salary
        };
        dispatch({ type: "ADD", payload: user });
        setId(id + 1);
    }

    const handleSubmit = (dispatch, e) => {
        e.preventDefault();
        AddUser(dispatch, e);
        setShowPopup(false);
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { users } = value;
                    const { dispatch } = value

                    return (
                        <div className='d-flex flex-column w-50 mx-auto'>
                            <h2 className='mt-3'>Users</h2>
                            <button className='btn btn-primary w-25 mb-3' style={{ fontSize: "1em" }} onClick={() => setShowPopup(true)}>Add</button>

                            {showPopup && (
                                <div className="popup">
                                    <h3 className='mb-3'>New User</h3>

                                    <form onSubmit={handleSubmit.bind(this, dispatch)} className='d-flex flex-column align-items-center justify-content-center w-100 p-1'>
                                        <input className='p-2 mb-3 w-100' type="text" onChange={(event) => setName(event.target.value)} placeholder='Name' required style={{ border: "1px solid #252525", borderRadius: "5px" }} />

                                        <input className='p-2 mb-3 w-100' type="text" onChange={(event) => setDepartment(event.target.value)} placeholder='Department' required style={{ border: "1px solid #252525", borderRadius: "5px" }} />

                                        <input className='p-2 mb-3 w-100' type="number" onChange={(e) => { setSalary(e.target.value) }} placeholder='Salary' required style={{ border: "1px solid #252525", borderRadius: "5px" }} />

                                        <div className='d-flex mt-2'>
                                            <button className='btn btn-success mx-2' type="submit">Submit</button>
                                            <button className='btn btn-danger mx-2' onClick={() => setShowPopup(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div >
                                {
                                    users.map((user) => (
                                        <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            salary={user.salary}
                                            department={user.department}></User>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}
