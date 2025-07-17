import Navbar from "../../components/navbar";
import Layout from "../../components/layout/layout";
import Link from "next/link";

export default async function Home() {
    const res = await fetch("http://localhost:4000/videos", {
        cache: "no-store",
    });

    if (!res.ok) {
        // handle HTTP errors however you like
        throw new Error(`Failed to fetch videos: ${res.status}`);
    }

    // Pull out the array stored in `data`
    const { data: videos } = await res.json();
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
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
                                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                    alt="..."
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kelanara Studio{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Originals
                        </mark>{" "}
                    </h1>
                    <div className="grid grid-cols-6 h-72 gap-6 overflow-hidden">
                        {videos.slice(3, 9).map((video) => (
                            <Link
                                key={video.id}
                                href={`/detail?id=${video.id}`}
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                    alt="..."
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kategori{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Horror
                        </mark>{" "}
                    </h1>
                    <div className="grid grid-cols-6 h-72 gap-6 overflow-hidden">
                        {videos.slice(9, 15).map((video) => (
                            <Link
                                key={video.id}
                                href={`/detail?id=${video.id}`}
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                    alt="..."
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    );
}
