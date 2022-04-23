import React from 'react'
import Button from '../Button/Button';
import { useSession, signIn, signOut } from "next-auth/react";

function AuthComp() {
    const { data: session } = useSession();
    return !session ? <Button variant="primary" title="Log in" clickHandler={signIn}/> : <Button title="Log out" clickHandler={signOut} variant="secondary" />
}

export default AuthComp
