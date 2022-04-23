import React from 'react'
import Button from './Button/Button';
import { useSession, signIn, signOut } from "next-auth/react";

function AuthComp() {
    const { data: session } = useSession();
    return !session ? <Button title="Log in" clickHandler={signIn}/> : <Button title="Log out" clickHandler={signOut}/>
}

export default AuthComp
