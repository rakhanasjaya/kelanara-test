// app/admin/create-video/page.jsx  (or pages/admin/create-video.jsx)

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/navbar";
import Layout from "../../../components/layout/layout";
import InputSecondary from "../../../components/inputSecond";
import Button from "../../../components/button";
import { videos } from "../../../staticData/videos";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        // Simple client‑side "auth"
        const token = localStorage.getItem("token");
        if (!token) {
            setError("You must be logged in");
            setSubmitting(false);
            return;
        }

        try {
            // Create a new video object
            const newId = videos.length ? videos[videos.length - 1].id + 1 : 1;
            const now = new Date().toISOString();
            videos.push({
                id: newId,
                title: formData.title,
                description: formData.description,
                category: formData.category,
                videoUrl: formData.url,
                thumbnail: formData.url, // or use a placeholder
                status: formData.status, // added for consistency
                created_at: now,
                updated_at: now,
            });

            // Redirect back to the dashboard
            router.push("/admin/adminDashboard");
        } catch (err) {
            console.error(err);
            setError("Failed to create video.");
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
                        {submitting ? "Creating…" : "Create Video"}
                    </Button>
                </form>
            </Layout>
        </div>
    );
}
