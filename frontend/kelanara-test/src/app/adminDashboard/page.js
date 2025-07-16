import Button from "../../../components/button";
import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";

export default function AdminDashboard() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Layout>
                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Dashboard Panel{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            Admin
                        </mark>{" "}
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

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                            Our products
                            <div className="flex justify-between">
                                <p className="mt-1 text-sm font-normal text-gray-500">
                                    Browse a list of Flowbite products designed
                                    to help you work and play, stay organized,
                                    get answers, keep in touch, grow your
                                    business, and more.
                                </p>
                                <Button>Apply Changes</Button>
                            </div>
                        </caption>

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">Silver</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">$2999</td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">White</td>
                                <td className="px-6 py-4">Laptop PC</td>
                                <td className="px-6 py-4">$1999</td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    );
}
