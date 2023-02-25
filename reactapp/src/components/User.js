import React, { useState } from 'react'
import UserConsumer from './context';

export default function User(props) {
    const [isVisible, setVisibility] = useState(false);

    const { name, salary, department } = props;

    const DeleteUser = (dispatch, e) => {
        const { id } = props;
        dispatch({ type: "DELETE", payload: id });
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-2">
                            <div className="card-header d-flex justify-content-between align-items-center border-0">
                                <h5 className='d-inline m-0' onClick={() => { setVisibility(!isVisible) }}>{name}</h5>
                                <span className='text-danger'>
                                    <i className="fa-solid fa-trash" style={{ cursor: "pointer" }} onClick={DeleteUser.bind(this, dispatch)}></i>
                                </span>
                            </div>
                            {
                                isVisible ? <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Department: {department}</li>
                                    <li className="list-group-item">Salary: {salary}</li>
                                </ul>
                                    : null
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}