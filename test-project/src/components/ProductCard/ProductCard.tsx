'use client'
import GetData from '@/actions/getData'
import { useEffect } from 'react'

export default function ProductCard(user_id: string) {
    let data
    useEffect(() => {
        data = GetData(user_id)
    })

    return (
        <main className="grid h-screen w-screen place-items-center bg-gradient-to-br from-stone-900 to-stone-600 font-serif"></main>
    )
}
