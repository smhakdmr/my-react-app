import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const AdTracking = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    console.log("deneme")
    return (
        <>
        AdTracking
        </>
    );
};

export default AdTracking;
