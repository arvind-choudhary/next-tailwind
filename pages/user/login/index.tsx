import React, { useCallback, useState } from 'react'
import { getProviders, getCsrfToken, useSession, signIn } from "next-auth/react"
import { CtxOrReq } from 'next-auth/client/_utils';
import { emailPattern, passwordPattern } from '../../../client/constants/patterns';
import { useRouter } from 'next/router';

type SignInProps = {
  csrfToken: string;
}

type State = {
  value: string;
  isValid: boolean;
}

export default function SignIn({ csrfToken } : SignInProps ) {

    const [email, setEmail] = useState<State>({ value: '', isValid: false});
    const [password, setPassword] = useState<State>({ value: '', isValid: false});
    const [message, setMessage] = useState("");
    const router = useRouter();

    const validateEmail = useCallback((e) => {
      setEmail({ value: e.target.value, isValid: emailPattern.test(e.target.value)});
    }, []);

    const validatePassword = useCallback((e) => {
      setPassword({ value: e.target.value, isValid: passwordPattern.test(e.target.value)})
    }, [])

    const onSubmit = useCallback(async function (e: React.MouseEvent<HTMLButtonElement>) {
      console.log("inner", email, password);
      const params = email.isValid && password.isValid ? { email: email?.value, password: password?.value } : {};
      const resp = await signIn('credentials', { redirect: false, ...params  });
      // resp?.error ? setMessage(resp.error) : router.push('/');
    }, []);


    return (
      <form >
        <h1>{JSON.stringify(email)} {JSON.stringify(password)} {message}</h1>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input type="text" value={email.value} onChange={validateEmail} />
        </label>
        <label>
          Password
          <input type="password" value={password.value} onChange={validatePassword} />
        </label>
        <button onClick={onSubmit}>Sign in</button>
      </form>
    )
  }
  
export async function getServerSideProps(context: CtxOrReq) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}