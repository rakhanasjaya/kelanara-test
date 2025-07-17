// app/page.jsx  (or pages/index.jsx)
"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import { videos } from "../../staticData/videos";
import { PlayCircleIcon } from "@heroicons/react/24/solid"; // Adjust the import based on your setup

export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                {/* Trending */}
                <Section
                    title={
                        <>
                            Yang lagi{" "}
                            <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                                Trending
                            </mark>{" "}
                            di Indonesia
                        </>
                    }
                    items={videos.slice(0, 3)}
                />

                {/* Originals */}
                <Section
                    title={
                        <>
                            Kelanara Studio{" "}
                            <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                                Originals
                            </mark>
                        </>
                    }
                    items={videos.slice(3, 9)}
                    cols={6}
                />

                {/* Horror Category */}
                <Section
                    title={
                        <>
                            Kategori{" "}
                            <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                                Horror
                            </mark>
                        </>
                    }
                    items={videos.slice(9, 15)}
                    cols={6}
                />
            </Layout>
            <Footer />
        </div>
    );
}

function Section({ title, items, cols = 3 }) {
    // Tentukan kelas grid-cols berdasarkan nilai cols
    const gridColsClass = cols === 6 ? "grid-cols-6" : "grid-cols-3";

    return (
        <div className="flex flex-col gap-2 mb-8">
            <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                {title}
            </h1>
            <div className={`grid ${gridColsClass} h-72 gap-6 overflow-hidden`}>
                {items.map((video) => (
                    <Link
                        key={video.id}
                        href={`/detail?id=${video.id}`}
                        className="relative group rounded-2xl overflow-hidden h-full w-full"
                    >
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:blur-sm"
                        />
                        <div
                            className="
              absolute inset-0
              bg-black bg-opacity-50
              flex flex-col items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              text-white
            "
                        >
                            <button
                                className="
                  mb-2 p-3 rounded-full bg-white bg-opacity-20
                  hover:bg-opacity-30 transition
                "
                                aria-label="Play"
                            >
                                <PlayCircleIcon className="h-6 w-6 text-fuchsia-500" />
                            </button>
                            <h2 className="text-lg font-semibold">
                                {video.title}
                            </h2>
                            <p className="text-sm">{video.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
