"use client";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Navbar from "../../../components/navbar";
import { useRouter } from "next/navigation"; // ← import this
import React from "react";

export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const router = useRouter(); // ← initialize the router

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // make sure you set loading to true at the start

        try {
            const response = await fetch("http://localhost:4000/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            // parse the JSON once and log it so you can see exactly what's coming back
            const data = await response.json();
            console.log("Login response payload:", data);

            if (!response.ok) {
                // if your API returns message on error, this will surf it up
                localStorage.removeItem("token"); // clear token if login fails
                localStorage.removeItem("role"); // clear role if login fails
                throw new Error(data.message || "Login failed");
            }

            // adjust this line to match your backend's key:
            // e.g. if your API returns { accessToken: "..."} use data.accessToken
            const token = data.data?.token;
            if (!token) {
                localStorage.removeItem("token"); // clear token if login fails
                localStorage.removeItem("role"); // clear role if login fails
                throw new Error("No token found in response. Check your API.");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("role", data.data.user.role || "user"); // adjust based on your API response
            router.push("/");
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
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
                        className="w-full max-w-md p-8 h-92 flex flex-col justify-between bg-gray-100 rounded-xl shadow bg-gradient-to-br from-fuchsia-800 to-fuchsia-400 text-white"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Login</h2>
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
                        </div>

                        <Button type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
