import { cookies } from 'next/headers'

import GetData from '@/actions/getData'

export default async function Page() {
    var jwt = require('jsonwebtoken')
    const token = cookies().get('user_info')?.value
    let user_info = jwt.verify(token, process.env.JWT_SECRET)
    let data = await GetData(user_info.user_id)
    let stringData = JSON.stringify(data)
    let parsedData = JSON.parse(stringData)
    let color = parsedData.color
    const colorVariants = {}
    //{parsedData.headline}
    return (
        <main
            className={` h-[200vh] w-[screen] bg-${color}-900 overflow-x-hidden overflow-y-hidden font-serif`}
        >
            <div
                className={`mb-5 grid h-[10vh] w-screen bg-${color}-800 content-center text-center`}
            >
                <h1 className="text-5xl text-white">{parsedData.headline}!</h1>
                <h2 className="text-4xl text-white">
                    {parsedData.subheadline}!
                </h2>
            </div>
            <div
                className={`grid h-[10vh] w-[100vw] bg-${color}-700 content-center`}
            >
                <p className="text-center text-4xl text-white opacity-100">
                    {parsedData.call_to_action}
                </p>
            </div>

            <div className="flex h-screen w-screen flex-row place-items-center content-center justify-center gap-10 rounded-lg align-middle">
                <div
                    className={`grid h-[50vh] w-[30vw] bg-${color}-700 content-center`}
                >
                    <p className="text-center text-4xl text-white opacity-100">
                        {parsedData.sales1}
                    </p>
                </div>
                <div
                    className={`grid h-[50vh] w-[30vw] bg-${color}-700 content-center`}
                >
                    <p className="text-center text-4xl text-white opacity-100">
                        {parsedData.sales2}
                    </p>
                </div>
                <div
                    className={`grid h-[50vh] w-[30vw] bg-${color}-700 content-center`}
                >
                    <p className="text-center text-4xl text-white opacity-100">
                        {parsedData.sales3}
                    </p>
                </div>
            </div>
        </main>
    )
}
