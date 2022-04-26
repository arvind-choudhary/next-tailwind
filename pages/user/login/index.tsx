import React, { useCallback, useState } from 'react'
import { getProviders, getCsrfToken, useSession, signIn } from "next-auth/react"


export default function SignIn({ csrfToken }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSubmit = useCallback(async () => {
      const resp = await signIn('credentials', { redirect: false, email, password });
    });

    return (
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="username" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={onSubmit}>Sign in</button>
      </form>
    )
  }
  
  export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }

function callback<T>(callback: any, arg1: () => any, deps: any, DependencyList: any) {
  throw new Error('Function not implemented.');
}


function deps<T>(callback: any, arg1: () => any, deps: any, DependencyList: any) {
  throw new Error('Function not implemented.');
}
