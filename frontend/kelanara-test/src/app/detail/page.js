// app/detail/page.jsx
import React, { Suspense } from "react";
import VideoDetail from "./VideoDetail";

export default function Page() {
    return (
        <Suspense fallback={<div className="p-4">Loading video...</div>}>
            <VideoDetail />
        </Suspense>
    );
}
