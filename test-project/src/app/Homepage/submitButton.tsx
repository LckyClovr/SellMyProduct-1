'use client'
import { useEffect, useState } from 'react'
import complete from '@/actions/chatcompletion'
import { navigate } from '@/actions/navigate'
export default function SubmitPrompt() {
    const [prompt, setPrompt] = useState('')
    const [color, setColor] = useState('')
    let allow = true
    const handleSubmit = async () => {
        if (allow == false) return null
        allow = false
        console.log('click')
        if (prompt.length < 1) return null
        if (color.length < 1) return null
        await complete(prompt, color)
        navigate('/Product')
    }
    return (
        <div>
            <div className="grid content-center">
                <select
                    name="Colors"
                    id="selector"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value)
                    }}
                >
                    <option value="">Color</option>
                    <option value="neutral">Neutral</option>
                    <option value="red">Red</option>
                    <option value="blue">Orange</option>
                    <option value="amber">Amber</option>
                    <option value="yellow">Yellow</option>
                    <option value="lime">Lime</option>
                    <option value="green">Green</option>
                    <option value="emerald">Emerald</option>
                    <option value="teal">Teal</option>
                    <option value="cyan">Cyan</option>
                    <option value="sky">Sky</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                    <option value="purple">Purple</option>
                    <option value="fuchsia">Fuchsia</option>
                    <option value="pink">Pink</option>
                    <option value="rose">Rose</option>
                </select>
            </div>
            <input
                type="text"
                className="mb-4 rounded-md border p-2 px-4 text-center"
                placeholder="Prompt"
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button
                className="mb-4 rounded-md border bg-stone-500 p-2 text-white hover:bg-cyan-700"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}
