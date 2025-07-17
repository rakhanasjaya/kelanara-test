"use client";
import React, { useState, useEffect } from "react";
import Button from "../../../components/button";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";

export default function AdminDashboard() {
    const [token, setToken] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Daftar opsi status — sesuaikan dengan yang disediakan backend
    const statusOptions = ["draft", "published"];

    // Ambil token
    useEffect(() => {
        const t = localStorage.getItem("token");
        setToken(t);
    }, []);

    // Fetch drafts
    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }
        fetch("http://localhost:4000/videos/drafts", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((json) => {
                setVideos(json.data || []);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [token]);

    // di komponen React-mu
    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(
                `http://localhost:4000/videos/update/${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    // cukup kirim status saja
                    body: JSON.stringify({ status: newStatus }),
                    // mode cors kalau perlu
                    mode: "cors",
                }
            );
            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                throw new Error(body.message || `Error ${res.status}`);
            }
            // sukses — kalau mau, panggil ulang fetch list atau tampil toast
        } catch (err) {
            console.error("Update status error:", err);
            setError(err.message);
            // rollback UI
            setVideos((vs) =>
                vs.map((v) =>
                    v.id === id
                        ? {
                              ...v,
                              status: videos.find((x) => x.id === id).status,
                          }
                        : v
                )
            );
        }
    };

    if (loading) return <p className="p-4">Loading drafts…</p>;
    if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

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
                            Our Video
                            <div className="flex justify-between">
                                <p className="mt-1 text-sm font-normal text-gray-500">
                                    Browse a list of Flowbite products designed
                                    to help you work and play…
                                </p>
                                <Button>Apply Changes</Button>
                            </div>
                        </caption>

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Url Video</th>
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
                                        {video.video_url}
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
                                                const newStatus =
                                                    e.target.value;
                                                // optimistically update UI
                                                setVideos((vs) =>
                                                    vs.map((v) =>
                                                        v.id === video.id
                                                            ? {
                                                                  ...v,
                                                                  status: newStatus,
                                                              }
                                                            : v
                                                    )
                                                );
                                                updateStatus(
                                                    video.id,
                                                    newStatus
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

                <Button className="mt-6">Apply Changes</Button>
            </Layout>
        </div>
    );
}
