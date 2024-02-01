'use server'
import { cookies } from 'next/headers'
import prisma from '../../lib/prisma'
export default async function LogIn(email: string, password: string) {
    //Check for existing user
    var jwt = require('jsonwebtoken')
    const argon2 = require('argon2')
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            first_name: true,
            last_name: true,
            email: true,
            user_id: true,
            password: true,
        },
    })
    if (!user) return null

    try {
        if (await argon2.verify(user.password, password)) {
            var token = jwt.sign(
                {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    user_id: user.user_id,
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            )
            cookies().set('user_info', token)
            return user // Password good
        }
    } catch {
        return null
    }

    return null
}
