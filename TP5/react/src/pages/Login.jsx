import {Suspense, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from "../components/Logo.tsx";
import {ArrowRightIcon, AtSymbolIcon, ExclamationCircleIcon, KeyIcon,} from '@heroicons/react/24/outline';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login({handleLogin}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            const response = await fetch(`${API_BASE_URL}/users?login=${login}&password=${password}`)
            const users = await response.json()

            if (users.length === 0) {
                setError('Invalid login credentials')
                return
            }

            handleLogin(users[0])
            navigate('/')
        } catch (err) {
            setError('Failed to login. Please try again.')
        }
    }

    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <Logo/>
                    </div>
                </div>
                <Suspense>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                            <h1 className="lusitana mb-3 text-2xl">
                                Please log in to continue.
                            </h1>
                            <div className="w-full">
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="login"
                                    >
                                        Login
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="email"
                                            type="login"
                                            name="login"
                                            placeholder="Enter your username"
                                            value={login}
                                            onChange={(e) => setLogin(e.target.value)}
                                            required
                                        />
                                        <AtSymbolIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <KeyIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                    className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50' mt-4 w-full"
                            >
                                Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>
                            </button>
                            <div
                                className="flex h-8 items-end space-x-1"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {errorMessage && (
                                    <>
                                        <ExclamationCircleIcon className="h-5 w-5 text-red-500"/>
                                        <p className="text-sm text-red-500">{errorMessage}</p>
                                    </>
                                )}
                            </div>
                            <div
                                className="flex h-14 items-center justify-center underline text-gray-800"
                            >
                                <Link to="/register" className="text-sm">New User ? Click to sign up </Link>
                            </div>
                        </div>
                    </form>
                </Suspense>
            </div>
        </main>
    )
}