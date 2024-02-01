import SignUpCard from '@/components/SignUpCard/SignUpCard'
export default function SignUp() {
    return (
        <main className="grid h-screen w-screen place-items-center bg-gradient-to-br from-sky-50 to-cyan-500 font-serif">
            <div className="float-right grid h-screen w-screen place-items-center align-middle">
                <SignUpCard />
            </div>
        </main>
    )
}
