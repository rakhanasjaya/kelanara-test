"use client";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import InputSecondary from "../../../components/inputSecond";
import Button from "../../../components/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function CreateVideo() {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        title: "",
        description: "",
        url: "",
        category: "",
        status: "draft",
    });
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        const token = localStorage.getItem("token");
        if (!token) {
            setError("You must be logged in");
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:4000/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    video_url: formData.url, // kalau backend pakai key video_url
                    category: formData.category,
                    status: formData.status,
                }),
            });

            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.message || `Error ${res.status}`);
            }

            // sukses: redirect atau bersihkan form
            router.push("/admin/adminDashboard");
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                    Create{" "}
                    <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                        Video
                    </mark>
                </h1>

                {error && <p className="text-red-600 mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <InputSecondary
                        label="Video Title"
                        type="text"
                        name="title"
                        placeholder="Video Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <InputSecondary
                        label="Video Description"
                        type="text"
                        name="description"
                        placeholder="Video Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <InputSecondary
                        label="Video URL"
                        type="text"
                        name="url"
                        placeholder="https://..."
                        value={formData.url}
                        onChange={handleChange}
                    />

                    <InputSecondary
                        label="Category"
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                    />

                    <div>
                        <label
                            htmlFor="status"
                            className="block mb-2 text-sm font-medium text-black"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="bg-transparent border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    <Button type="submit" disabled={submitting}>
                        {submitting ? "Submitting…" : "Create Video"}
                    </Button>
                </form>
            </Layout>
        </div>
    );
}
