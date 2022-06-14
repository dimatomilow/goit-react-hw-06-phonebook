import React from 'react'
import {useSelector} from 'react-redux'
const LastName = () => {
const name=useSelector((state)=>state.user.lastName)
    return <div >{ name}</div>
}

export default LastName
