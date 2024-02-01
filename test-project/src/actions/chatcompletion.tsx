'use server'
import OpenAI from 'openai'
import prisma from '../../lib/prisma'
import { cookies } from 'next/headers'
const openai = new OpenAI()

export default async function complete(prompt: string, color: string) {
    var jwt = require('jsonwebtoken')
    const token = cookies().get('user_info')?.value
    let user_info = jwt.verify(token, process.env.JWT_SECRET)
    let user_id = user_info.user_id
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content:
                    'Give me a name, headline, sub-headline, 3 seperate paragraph of sales text, each paragraph should be less than 100 words, and a call to action about my product. My product is '
                        .concat(prompt)
                        .concat(
                            '. Give in a JSON format with the names: "product_name","headline","subheadline","p1","p2","p3","call_to_action".'
                        ),
            },
        ],
        model: 'gpt-3.5-turbo',
    })
    let AIInfo = JSON.parse(completion.choices[0].message.content || '')
    console.log(AIInfo)
    const createdUser = await prisma.user.update({
        where: { user_id: user_id },
        data: {
            prompt: AIInfo.product_name,
            headline: AIInfo.headline,
            subheadline: AIInfo.subheadline,
            call_to_action: AIInfo.call_to_action,
            sales1: AIInfo.p1,
            sales2: AIInfo.p2,
            sales3: AIInfo.p3,
            color: color,
        },
    })

    return completion.choices[0].message.content
}
