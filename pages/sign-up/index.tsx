import React, { useState } from 'react'
import Button from "../../components/reusable/Button/Button";

export default function SignUp() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <section>

            <form>

                <h1>Sign Up</h1>

                <div>

                    <label>
                        First name

                        <input type="text" required value={firstName} aria-valuetext={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>

                    <label>
                        Last name

                        <input type="text" required value={lastName} aria-valuetext={lastName}  onChange={e => setLastName(e.target.value)} />
                    </label>

                    <label>
                        Email

                        <input type="email" required value={email} aria-valuetext={email}  onChange={e => setEmail(e.target.value)} />
                    </label>

                    <label>
                        Password

                        <input type="password" required value={password} aria-valuetext={password}  onChange={e => setPassword(e.target.value)} />
                    </label>

                    <Button title="Submit" />

                </div>

            </form>

        </section>
    )
}
