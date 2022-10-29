import React from "react";
import Admin from "./Admin";
import NavbarContainer from "../../templatePage/Navbar/NavbarContainer";
import FooterContainer from "../../templatePage/Footer/FooterContainer";


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