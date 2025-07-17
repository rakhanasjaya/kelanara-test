"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import ReactPlayer from "react-player";

export default function Detail() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Ambil id dari query string (?id=1)
    const id = searchParams.get("id");

    // State untuk token, video data, dan loading
    const [token, setToken] = useState(null);
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Ambil token dari localStorage atau cookie
        const localToken =
            localStorage.getItem("token") ||
            document.cookie
                .split("; ")
                .find((row) => row.startsWith("token="))
                ?.split("=")[1] ||
            null;

        if (!localToken) {
            // 2. Redirect jika tidak ada token
            router.push("/login");
            return;
        }
        setToken(localToken);

        if (!id) {
            console.error("No video ID in URL");
            return;
        }

        // 3. Fetch data video
        fetch(`http://localhost:4000/videos/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localToken}`,
            },
            cache: "no-store",
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch video");
                return res.json();
            })
            .then(({ data }) => {
                setVideo(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [id, router]);

    // 4. Render loading / error states
    if (loading) {
        return <div className="p-4">Loading...</div>;
    }
    if (!video) {
        return <div className="p-4 text-red-500">Video not found.</div>;
    }

    // 5. Render konten
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <iframe
                    src={video.video_url}
                    controls
                    width="100%"
                    height="100%"
                    muted
                    className="rounded-2xl overflow-hidden h-96"
                />

                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        {video.title}
                    </h1>
                    <p className="text-sm font-medium">
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            {video.category}
                        </mark>
                    </p>
                </div>

                <p className="mt-2 text-md font-normal text-black">
                    {video.description}
                </p>
            </Layout>
        </div>
    );
}
