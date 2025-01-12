import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link className='btn btn-primary' to="/signup">Signup</Link>
            <Link className='btn btn-primary' to="/login">Login</Link>
        </div>
    )
}

export default Home