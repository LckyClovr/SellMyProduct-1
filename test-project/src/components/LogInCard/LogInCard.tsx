'use client'
import Link from 'next/link'
import { useState } from 'react'
import LogIn from '@/actions/LogIn'
import { navigate } from '@/actions/navigate'

export default function LogInCard() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        console.log('Click')
        let user = await LogIn(email, password)
        if (!user) return null
        await navigate('/Homepage')
    }

    return (
        <div className="flex w-[90%] max-w-[400px] flex-col rounded-lg border-4 bg-cyan-500 p-4">
            <p className="mb-5 text-center text-2xl">Login</p>
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
            <button
                className="mb-4 rounded-md border bg-cyan-600 p-2 text-blue-50 hover:bg-cyan-700"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <Link className="text-center" href="/SignUp">
                Don't have an account? Sign up
            </Link>
        </div>
    )
}
