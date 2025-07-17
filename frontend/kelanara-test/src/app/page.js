// app/page.jsx  (or pages/index.jsx, adjust path as needed)
"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Layout from "../../components/layout/layout";
import Link from "next/link";
// import the static data
import { videos } from "../../staticData/videos"; // adjust the path to wherever your videos.js lives

export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                {/* Trending */}
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Yang lagi{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Trending
                        </mark>{" "}
                        di Indonesia
                    </h1>
                    <div className="grid grid-cols-3 h-72 gap-6 overflow-hidden">
                        {videos.slice(0, 3).map((video) => (
                            <Link
                                href={`/detail?id=${video.id}`}
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                                key={video.id}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Originals */}
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kelanara Studio{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Originals
                        </mark>
                    </h1>
                    <div className="grid grid-cols-6 h-72 gap-6 overflow-hidden">
                        {videos.slice(3, 9).map((video) => (
                            <Link
                                key={video.id}
                                href={`/detail?id=${video.id}`}
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Horror Category */}
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kategori{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Horror
                        </mark>
                    </h1>
                    <div className="grid grid-cols-6 h-72 gap-6 overflow-hidden">
                        {videos.slice(9, 15).map((video) => (
                            <Link
                                key={video.id}
                                href={`/detail?id=${video.id}`}
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </Layout>
            <Footer />
        </div>
    );
}
