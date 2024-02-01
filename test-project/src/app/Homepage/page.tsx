import { cookies } from 'next/headers'
import SubmitPrompt from './submitButton'
import './style.css'
import GetData from '@/actions/getData'
import { navigate } from '@/actions/navigate'
export default async function Page() {
    var jwt = require('jsonwebtoken')
    const token = cookies().get('user_info')?.value
    let user_info = jwt.verify(token, process.env.JWT_SECRET)
    let firstName = user_info.first_name
    let lastName = user_info.last_name
    let email = user_info.email

    let data = await GetData(user_info.user_id)
    let stringData = JSON.stringify(data)
    let parsedData = JSON.parse(stringData)

    return (
        <main className="grid h-screen w-screen place-items-center bg-gradient-to-br from-stone-900 to-stone-600 font-serif">
            <div className="container grid h-screen w-screen place-items-center content-center">
                <h1 className="text-5xl">
                    Hello, {firstName} {lastName}
                </h1>
                <p className="mb-3 text-5xl">
                    Please enter a description of your product then select a
                    color:
                </p>
                <SubmitPrompt />
                {parsedData.prompt != '' && (
                    <a className="text-white" href="/Product">
                        Click here to view your product page!
                    </a>
                )}
            </div>
        </main>
    )
}
