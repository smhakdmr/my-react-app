import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const EditProfile = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    console.log("deneme")
    return (
        <>
        EditProfile
        </>
    );
};

export default EditProfile;
