import React from "react";
import "./AboutContainer.css";
import FooterContainer from "../../templatePage/Footer/FooterContainer";
import About from "./About";
import { SubscriptionTeams } from "../../graphQL";

import { useSubscription } from "@apollo/client";



const AboutContainer = () => {

    const {data, loading, error} = useSubscription(SubscriptionTeams);

    return(
        <>
            <About teams={data} loading={loading}/>
            <FooterContainer/>
        </>
    );
}

export default AboutContainer;