import React, { useEffect, useState } from "react";
import { partner } from "../dataPartner";
import Partner from "../component/Partner"

const PartnerContainer = () => {
    const [partnerList, setPartnerList] = useState(partner);

    useEffect(()=>{
        setPartnerList(partner);
        // console.log(partner);
    },[partner])

    return(
        <>
            <Partner data={partnerList}/>
        </>
    );
}

export default PartnerContainer;