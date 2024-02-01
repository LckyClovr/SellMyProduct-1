'use server'
import prisma from '../../lib/prisma'
export default async function GetData(user_id: string) {
    const user = await prisma.user.findFirst({
        where: {
            user_id: user_id,
        },
        select: {
            headline: true,
            subheadline: true,
            call_to_action: true,
            sales1: true,
            sales2: true,
            sales3: true,
            color: true,
            prompt: true,
        },
    })
    return user
}
