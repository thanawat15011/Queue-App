import React from "react"
const routes = [
    { key: '', name: "", path: "/company", component: React.lazy(() => import("./views/company"))},
    { key: '', name: "", path: "/manage-queue", component: React.lazy(() => import("./views/manage-queue"))},
    { key: '', name: "", path: "/device", component: React.lazy(() => import("./views/device"))},
    { key: '', name: "", path: "/history", component: React.lazy(() => import("./views/history"))},
    { key: '', name: "", path: "/location", component: React.lazy(() => import("./views/locations"))},
    { key: '', name: "", path: "/user", component: React.lazy(() => import("./views/user"))},
    { key: '', name: "", path: "/exam-room", component: React.lazy(() => import("./views/exam_room"))},
    { key: '', name: "", path: "/sequence", component: React.lazy(() => import("./views/sequence"))},
    { key: '', name: "", path: "/", component: React.lazy(() => import("./views/overview"))},
]
export default routes
