import React from "react";
import Admin from "./Admin";
import NavbarContainer from "../TemplatePage/Navbar/NavbarContainer";
import FooterContainer from "../TemplatePage/Footer/FooterContainer";


const AdminContainer = () => {
    return(
        <>
            <NavbarContainer/>
            <Admin/>
            <FooterContainer/>
        </>
    );
}

export default AdminContainer;