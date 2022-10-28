import React from "react";
import Navbar from "../TemplatePage/Navbar/NavbarContainer";
import instagram from "./asset/instagram.svg";
import linkedin from "./asset/linkedin.svg";
import "./AboutContainer.css";
import MyLoader from "../Component/MyLoader";


const About = ({
    teams, 
    loading
}) => {
    console.log(teams);
    return(
        <>
            <Navbar/>
            <div className="pt-32 pb-12">
                <div className="container mx-auto">
                    <div className="">
                        <p className="text-primary text-4xl font-bold text-center mt-4">Team Patungin Group</p>
                        <div className="mt-12">
                            <div className="flex flex-wrap justify-center">
                                {
                                    loading
                                    ?
                                    <>
                                        <MyLoader/>
                                        <MyLoader/>
                                    </>
                                    :
                                    teams?.mini_project_data_team.map((team) => (
                                        // import img from `./img/${team.file_path}`;
                                        <div className="flex flex-col mb-12">
                                            <div key={team.id} className="card w-80 rounded-3xl mx-8" >
                                                <img src={require(`./img/${team.file_path}`)} alt="Gambar1" className="w-full" />
                                                <div className="text-center pt-4">
                                                    <h3 className="text-primary text-2xl font-bold pb-2">{team.nama}</h3>
                                                    <h4 className="text-xl font-semibold text-primary">{team.role}</h4>
                                                </div>
                                            </div>
                                            <div className="mx-auto py-8 justify-center text-center">
                                                <li className="flex">
                                                    <img src={instagram} alt="instagram" className="w-8 mr-2" /><span className="my-auto text-lg font-semibold text-primary">{team.instagram}</span>
                                                </li>
                                                <li className="flex mt-2">
                                                    <img src={linkedin} alt="linkedin" className="w-8 mr-2" /> <span className="my-auto text-lg font-semibold text-primary">{team.linkedin}</span>
                                                </li>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;