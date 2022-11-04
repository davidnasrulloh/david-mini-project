import React from "react";

const Sponsor = ({
    data
}) => {
    // console.log(data);
    return(
        <div id="partnership" className="mb-60">
            <h1 className="text-primary font-bold text-3xl text-center pt-32 mb-12">Partnership</h1>
            <div className="container mx-auto flex flex-wrap justify-center">
            {
                data.map((partner)=>{
                    return(
                        <img className="h-12 mx-12 my-6" src={require(`./img/partner/${partner.file_name}`)} alt="" data-aos="fade-down-right" data-aos-duration="800"/>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Sponsor;