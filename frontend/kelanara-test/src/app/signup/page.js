"use client";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import React from "react";

export default function RegisterPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: implement register logic here
        console.log({ email, password, confirmPassword });
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="grid grid-cols-2 min-h-screen w-full">
                <div className="h-full w-full object-cover overflow-hidden">
                    <img
                        src="/movie-collection.jpg"
                        alt="Movie Collection"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-fuchsia-50 to-white">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md p-8 h-max flex flex-col justify-between bg-gray-100 rounded-xl shadow bg-gradient-to-br from-fuchsia-800 to-fuchsia-400 text-white"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">
                                Register
                            </h2>
                            <div className="mb-4">
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="you@example.com"
                                    required
                                    label="Email"
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                    required
                                    label="Password"
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                    required
                                    label="Confirm Password"
                                />
                            </div>
                        </div>

                        <Button type="submit">Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
