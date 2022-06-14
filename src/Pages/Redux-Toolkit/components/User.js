import React from 'react'
import FirstName from './FirstName'
import LastName from './LastName'
import { useDispatch } from 'react-redux'
import {setFirstName,setLastName} from '../Features/User/UserSlice'

const User = () => {
    const dispatch=useDispatch()
    return (
        <div >
            <input
                type='text'
                placeholder='First Name'
onChange={(e)=>dispatch(setFirstName(e.target.value))}
            />
            <input
                type='text'
                placeholder='Second Name'
onChange={(e)=>dispatch(setLastName(e.target.value))}
            />
            <div>
                <div >
                    <div >First Name:</div>
                    <div >
                        <FirstName />
                    </div>
                </div>

                <div >
                    <div >Last Name:</div>
                    <div >
                        <LastName />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
