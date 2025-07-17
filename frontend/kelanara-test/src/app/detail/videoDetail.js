// app/detail/VideoDetail.jsx
"use client";
import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import ReactPlayer from "react-player";
import { videos } from "../../../staticData/videos";

export default function VideoDetail() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const idParam = searchParams.get("id");
    const videoId = idParam ? parseInt(idParam, 10) : null;
    const video = videos.find((v) => v.id === videoId);

    useEffect(() => {
        const token =
            typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null;
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    if (!videoId || !video) {
        return <div className="p-4 text-red-600">Video not found.</div>;
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <div className="rounded-2xl overflow-hidden h-96">
                    <ReactPlayer
                        url={video.videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
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
