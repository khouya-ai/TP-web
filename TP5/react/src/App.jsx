import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
    const [user, setUser] = useState(null)

    // Check for persisted session on initial load
    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    const handleLogin = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? (
                            <Home user={user} handleLogout={handleLogout} />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to="/" replace /> : <Register handleLogin={handleLogin} />}
                />
            </Routes>
        </Router>
    )
}