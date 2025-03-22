import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Logo from "../components/Logo.tsx";

export default function Home({user, handleLogout}) {


    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Logo/>
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p className="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
                        Hello, <strong className="capitalize">{user.name}</strong>!
                    </p>
                    <p className="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
                        <strong>Welcome to SDIA.</strong> A master degree where you can learn two specializations in one
                        program.
                        <a href="https://www.enset-media.ac.ma/" className="text-blue-500">
                            Two birds, one stone.
                        </a>
                    </p>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Log Out</span>
                        <ArrowRightIcon className="w-5 md:w-6"/>
                    </button>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-26 md:py-10">
                    <img
                        src="sdia2.webp"
                        width="600"
                        alt="Screenshots of the dashboard project showing desktop version"
                        className="hidden md:block"
                    />
                </div>
            </div>
        </main>
    );
}