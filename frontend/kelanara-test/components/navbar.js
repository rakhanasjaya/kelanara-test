"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./button";

export default function Navbar() {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setRole(localStorage.getItem("role"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role"); // Clear role if needed
        setToken(null);
        window.location.href = "/login"; // Redirect to login page after logout
    };

    return (
        <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-12" alt="Logo" />
                    </div>
                </Link>

                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
                    <div className="flex flex-row gap-2">
                        {token ? (
                            <>
                                <div>
                                    <Button onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button>Login</Button>
                                </Link>
                                <Link href="/signup">
                                    <Button>Sign Up</Button>
                                </Link>
                            </>
                        )}
                        {role === "admin" && (
                            <Link href="/adminDashboard">
                                <Button>Admin Dashboard</Button>
                            </Link>
                        )}
                    </div>

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* hamburger icon */}
                    </button>
                </div>

                {/* rest of your menu */}
            </div>
        </nav>
    );
}
