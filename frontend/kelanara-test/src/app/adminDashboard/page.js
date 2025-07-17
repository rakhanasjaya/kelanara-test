// app/admin/dashboard/page.jsx  (or pages/admin/dashboard.jsx)

"use client";
import React, { useState } from "react";
import Button from "../../../components/button";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import { videos as initialVideos } from "../../../staticData/videos";
import Link from "next/link";

export default function AdminDashboard() {
    const [videos, setVideos] = useState(
        // Initialize with your static videos and add a default status if missing
        initialVideos.map((v) => ({
            ...v,
            status: v.status ?? "draft",
        }))
    );
    const statusOptions = ["draft", "published"];

    const updateStatus = (id, newStatus) => {
        // In a real API you'd POST here—this is just static demo logic.
        setVideos((vs) =>
            vs.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
        );
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Dashboard Panel{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Admin
                        </mark>
                    </h1>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                            Our Videos
                            <div className="flex justify-between">
                                <p className="mt-1 text-sm font-normal text-gray-500">
                                    Manage your video statuses below.
                                </p>
                                <Link href="/createVideo">
                                    <Button>Create New Video</Button>
                                </Link>
                            </div>
                        </caption>

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Video URL</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">
                                    <span className="sr-only">
                                        Change Status
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {videos.map((video) => (
                                <tr
                                    key={video.id}
                                    className="bg-white border-b border-gray-200"
                                >
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {video.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {video.videoUrl}
                                    </td>
                                    <td className="px-6 py-4">
                                        {video.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {video.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={video.status}
                                            onChange={(e) => {
                                                updateStatus(
                                                    video.id,
                                                    e.target.value
                                                );
                                            }}
                                            className="border border-gray-300 rounded px-2 py-1"
                                        >
                                            {statusOptions.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        opt.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Button
                    className="mt-6"
                    onClick={() => {
                        /* no-op */
                    }}
                >
                    Apply Changes
                </Button>
            </Layout>
        </div>
    );
}
