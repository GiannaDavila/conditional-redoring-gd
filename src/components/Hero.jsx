import React, { useState } from "react";

function Hero(){
    const [user, setUser]= useState()
    console.log({user})
    const handleLogin = () => {
     setUser({ firstName: 'Gianna', email: 'giannagiannadavila@gmail.com'})
    }
    const handleLogout = () => {
         setUser()
    }
    
    if (!user){ //if no user
        return <button onClick={handleLogin} >Login</button>
    }
    return (
        <>
        <h1>Hello {user.firstName}</h1>
        <button onClick={handleLogout} >Log out</button>
        </>
    )
}


export default Hero