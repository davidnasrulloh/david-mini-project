import React from "react";

const Sponsor = ({
    data
}) => {
    // console.log(data);
    return(
        <div id="partnership">
            <h1 className="text-primary font-bold text-3xl text-center mt-20 mb-8">Partnership</h1>
            <div className="container mx-auto flex flex-wrap justify-center">
            {
                data.map((partner)=>{
                    return(
                        <img className="h-12 mx-12 my-6" src={require(`./img/partner/${partner.file_name}`)} alt="" />
                    )
                })
            }
            </div>
        </div>
    );
}

export default Sponsor;