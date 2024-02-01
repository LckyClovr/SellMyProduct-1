'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Register from '@/actions/Register'
import { navigate } from '@/actions/navigate'
export default function SignUpCard() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Confirmpassword, setConfirmPassword] = useState('')
    const [isFormVerified, setFormVerified] = useState(false)

    useEffect(() => {
        setFormVerified(
            firstName.length > 0 &&
                lastName.length > 0 &&
                password.length > 0 &&
                password === Confirmpassword
        )
    }, [firstName, lastName, email, password, Confirmpassword])

    const handleSubmit = async () => {
        console.log('Click')
        if (!isFormVerified) return null
        let user = await Register(firstName, lastName, email, password)
        if (user) {
            await navigate('/LogIn')
        }
    }

    return (
        <div className="flex w-[90%] max-w-[400px] flex-col rounded-lg border-4 bg-cyan-500 p-4">
            <p className="mb-5 text-center text-2xl">Sign Up</p>
            <input
                type="text"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="First Name"
                onChange={(e) => setfirstName(e.target.value)}
            />
            <input
                type="text"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
            />
            <input
                type="email"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
                className="mb-4 rounded-md border bg-cyan-600 p-2 text-blue-50 hover:bg-cyan-700"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <Link className="text-center" href="/LogIn">
                Already have an account? Log In!
            </Link>
        </div>
    )
}
