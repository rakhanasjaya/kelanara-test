// app/login/page.jsx  (or pages/login.jsx)

"use client";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Navbar from "../../../components/navbar";
import React from "react";
import { useRouter } from "next/navigation";
import user from "../../../staticData/user";

export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const record = user[email];
        if (!record) {
            alert("No account found for this email.");
            setLoading(false);
            return;
        }
        if (record.password !== password) {
            alert("Incorrect password.");
            setLoading(false);
            return;
        }

        // Simulate a token (in production you'd use a real JWT)
        const fakeToken = `token-${Math.random().toString(36).substr(2)}`;
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("role", record.role);

        setLoading(false);
        router.push("/");
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
                        className="w-full max-w-md p-8 flex flex-col justify-between bg-gradient-to-br from-fuchsia-800 to-fuchsia-400 text-white rounded-xl shadow"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Login</h2>
                            <div className="mb-4">
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
