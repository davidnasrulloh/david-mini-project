import React from "react";
import "./TeamContainer.css";
import { useQuery } from "@apollo/client";
import { GetAllDataTeam } from "../graphQL";

const TextField = ({label,name}) => (
    <div className="flex flex-1 flex-col">
        <label htmlFor={name} className="mb-2 font-semibold">{label}</label>
        <input type="text" name={name} id={name} class="form-input w-3/4 border-2 border-teal-600 rounded-xl h-14"/>
    </div>
)

const TeamContainer = () => {

    const {data, loading, error} = useQuery(GetAllDataTeam);

    return(
        <>
            <form action="">
                <div className="flex my-4">
                    <TextField label="Nama" name="nama"/>
                    <TextField label="Role" name="role"/>
                    <TextField label="Instagram" name="instgram"/>
                    <TextField label="Linkedin" name="linkedin"/>
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="fileUpload" className="mb-2 font-semibold">Upload File</label>
                        <input type="file" name="fileUpload" id="fileUpload" class="form-input w-3/4 border-0 border-teal-600 rounded-xl h-16"/>
                    </div>
                    <div className="flex my-auto">
                        <button className="text-white bg-blue-600 px-4 h-12 justify-center rounded-lg">Tambah Data</button>
                    </div>
                </div>
            </form>

            <h3 className="text-primary text-2xl mt-12 font-semibold">Detail Data</h3>
            <table className="w-full mt-4 bg-green-600">
                <tr>
                    <th>Nama</th>
                    <th>Role</th>
                    <th>Instagram</th>
                    <th>Linkedin</th>
                    <th>Foto</th>
                    <th>Aksi</th>
                </tr>
            {
                data?.mini_project_data_team.map((team)=>(
                    <tr>
                        <td>{team.nama}</td>
                        <td>{team.role}</td>
                        <td>{team.instagram}</td>
                        <td>{team.linkedin}</td>
                        <td><img src={require(`../AboutUs/img/${team.file_path}`)} alt="gambar" className="w-16"/></td>
                        <td>
                            <button>Hapus</button>
                            <button>Edit</button>
                        </td>
                    </tr>
                ))
            }
            </table>

        </>
    )
}

export default TeamContainer;