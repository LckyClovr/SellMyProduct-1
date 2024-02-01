'use server'
import prisma from '../../lib/prisma'
export default async function Register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
) {
    //Check for existing user
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    if (user) return null
    const argon2 = require('argon2')
    const hashword = await argon2.hash(password)
    const createdUser = await prisma.user.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashword,
            prompt: '',
            headline: '',
            subheadline: '',
            call_to_action: '',
            sales1: '',
            sales2: '',
            sales3: '',
            color: '',
        },
    })
    console.log(hashword)
    return createdUser
}
