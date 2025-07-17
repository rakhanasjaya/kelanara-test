import Layout from "../../../components/layout/layout";
import Navbar from "../../../components/navbar";
import React from "react";
import ReactPlayer from "react-player";

export default function Detail() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <Layout>
                <ReactPlayer
                    url={"https://www.youtube.com/watch?v=rnwlWn603g4"}
                    controls={true}
                    width="100%"
                    height="100%"
                    muted={true}
                    className="react-player rounded-2xl overflow-hidden"
                />
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl">
                        Captain{" "}
                        <mark className="px-2 text-white bg-fuchsia-600 rounded-sm">
                            America: The Winter Soldier
                        </mark>{" "}
                    </h1>
                    <p className="text-sm text-black font-medium">
                        <mark className="px-2 text-white text-md bg-fuchsia-600 rounded-sm">
                            Action
                        </mark>{" "}
                    </p>
                </div>
                <p className="text-md text-black font-normal">
                    aksdjlkasjdklasjkld aasdjajksdhajksdjkv ashdjkhajkdhajk
                </p>
            </Layout>
        </div>
    );
}
