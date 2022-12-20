import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export default function NotFound(){

    const Location = useLocation()
    const Navigator = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            Navigator('/')
        }, 3000)
    }, [])

    return(
        <div>
            <h2 className="display-2">404 NotFound!</h2>
            <p>No Results Match for {Location.pathname}</p>
        </div>
    )
}