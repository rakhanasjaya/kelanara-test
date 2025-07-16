import Navbar from "../../components/navbar";
import Layout from "../../components/layout/layout";

export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Video yang lagi{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Trending
                        </mark>{" "}
                        di Indonesia
                    </h1>
                    <div className="grid grid-cols-3 h-72 gap-6 overflow-hidden">
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kelanara Studio{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Originals
                        </mark>{" "}
                    </h1>
                    <div className="grid grid-cols-7 h-72 gap-6 overflow-hidden">
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Kategori{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Horrror
                        </mark>{" "}
                    </h1>
                    <div className="grid grid-cols-7 h-72 gap-6 overflow-hidden">
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full object-cover rounded-2xl overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                alt="..."
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
