import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import ContentLoader from 'react-content-loader';
import { gql, useMutation } from "@apollo/client";
// import { UpdateTeam } from "../graphQL";

const UpdateTeam = gql`
    mutation MyMutation($id: Int = 10, $file_path: String = "", $instagram: String = "", $linkedin: String = "", $nama: String = "", $role: String = "") {
        update_mini_project_data_team(where: {id: {_eq: $id}}, _set: {file_path: $file_path, instagram: $instagram, linkedin: $linkedin, nama: $nama, role: $role}) {
        returning {
            file_path
            id
            instagram
            linkedin
            nama
            role
        }
        }
    }
`;

const TeamUploadFile = ({img,...rest}) => (
    <div className="flex flex-1 flex-col">
        {img && <img src={img} alt="preview" />}
        <label htmlFor="fileUpload" className="mb-2 font-semibold text-slate-400">Upload File</label>
        <input type="file" {...rest} name="fileUpload" id="fileUpload" class="form-input w-3/4 border-0 border-teal-600 rounded-xl h-16"/>
    </div>
)

const TextField = ({label,name, value, handleChange}) => (
    <div className="flex flex-1 flex-col">
        <label htmlFor={name} className="mb-2 font-semibold text-slate-400">{label}</label>
        <input type="text" onChange={(ev)=> handleChange(name, ev.currentTarget.value)} value={value} name={name} id={name} class="form-input w-3/4 border-2 border-teal-600 rounded-xl h-14"/>
    </div>
)

const TableLoader = props => (
    <ContentLoader
        width={1000}
        height={550}
        viewBox="0 0 1000 550"
        backgroundColor="#eaeced"
        foregroundColor="#ffffff"
        {...props}>
        <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
        <circle cx="879" cy="123" r="11" />
        <circle cx="914" cy="123" r="11" />
        <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
        <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
        <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
        <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
        <circle cx="880" cy="184" r="11" />
        <circle cx="915" cy="184" r="11" />
        <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
        <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
        <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
        <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
        <circle cx="881" cy="242" r="11" />
        <circle cx="916" cy="242" r="11" />
        <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
        <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
        <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
        <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
        <circle cx="882" cy="303" r="11" />
        <circle cx="917" cy="303" r="11" />
        <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
        <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
        <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
        <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
        <circle cx="881" cy="363" r="11" />
        <circle cx="916" cy="363" r="11" />
        <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
        <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
        <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
        <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
        <circle cx="882" cy="424" r="11" />
        <circle cx="917" cy="424" r="11" />
        <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
        <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
        <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
        <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
        <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
        <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
        <circle cx="882" cy="484" r="11" />
        <circle cx="917" cy="484" r="11" />
        <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
        <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
        <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
        <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
        <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
        <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
        <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
        <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
        <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
        <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
    </ContentLoader>
)

const Team = ({
    data, 
    loading,
    formData,
    setImage,
    hapusTeam,
    handleSubmit,
    handleChangeFormData
}) => {
    // console.log(data);
    const {nama, role, instagram, linkedin} = formData;
    const [imagePreview, setImagePreview] = useState(null);
    const [editing, setEditing] = useState(true); 
    const [updateTeam] = useMutation(UpdateTeam);
    const [imageUbah, setImageUbah] = useState('');

    const [formEditData, setFormEditData] = useState({
        nama: '',
        role: '',
        instagram: '',
        linkedin: ''
    })

    const handleChangeEditFormData = (label, newValue) => {
        setFormEditData({
            ...formEditData,
            [label]: newValue
        })
        // console.log(newValue);
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        // const fileName = e.target.files[0].name;
        setImage(file);
        setImageUbah(file);
        setImagePreview(URL.createObjectURL(file));
    }

    useEffect(()=>{
        // setState(data)
        // setFormEditData(data)
    },[])


    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    const handleEdit = (data) => {
        setFormEditData(data);
        setEditing(false);
    }

    const handleTambah = () => {
        // setEditData(data);
        setEditing(true);
        setImagePreview(null);
    }

    const handleUbahData = async (ev) => {
        ev.preventDefault();

        await updateTeam ({
            variables: {
                file_path: imageUbah.name,
                id: formEditData.id,
                instagram: formEditData.instagram,
                linkedin: formEditData.linkedin,
                nama: formEditData.nama,
                role: formEditData.role,
            }
        })
    }


    return(
        <>
            {/* Tambah Data */}
            <form action="" onSubmit={handleSubmit} style={editMode}>
                <div className="flex my-4">
                    <TextField label="Nama" name="nama" value={nama} handleChange={handleChangeFormData}/>
                    <TextField label="Role" name="role" value={role} handleChange={handleChangeFormData} />
                    <TextField label="Instagram" name="instagram" value={instagram} handleChange={handleChangeFormData}/>
                    <TextField label="Linkedin" name="linkedin" value={linkedin} handleChange={handleChangeFormData} />
                    <TeamUploadFile onChange={(ev)=>onImageUpload(ev)} img={imagePreview}/>
                    <div className="flex my-auto">
                        <button type="submit" className="text-white bg-blue-600 px-4 h-12 justify-center rounded-lg"><FontAwesomeIcon icon={faPlus} /> Tambah Data</button>
                    </div>
                </div>
            </form>

            {/* Edit Data */}
            <form action="" onSubmit={handleUbahData} style={viewMode}>
                <div className="flex my-4">
                    <TextField label="Nama" name="nama" value={formEditData.nama} handleChange={handleChangeEditFormData}/>
                    <TextField label="Role" name="role" value={formEditData.role} handleChange={handleChangeEditFormData} />
                    <TextField label="Instagram" name="instagram" value={formEditData.instagram} handleChange={handleChangeEditFormData}/>
                    <TextField label="Linkedin" name="linkedin" value={formEditData.linkedin} handleChange={handleChangeEditFormData} />
                    <TeamUploadFile onChange={(ev)=>onImageUpload(ev)} img={imagePreview}/>
                    <div className="flex my-auto">
                        <button type="submit" className="text-white bg-blue-600 px-4 h-12 justify-center rounded-lg"><FontAwesomeIcon icon={faPenToSquare} /> Ubah Data</button>
                    </div>
                </div>
            </form>
            <button className="w-full text-center border-y-2 py-4" onClick={()=>handleTambah()} style={viewMode}> <FontAwesomeIcon icon={faClose} /> close edit</button>

            <div className="">
                <h3 className="text-primary text-2xl mt-12 font-semibold">Detail Data</h3>
                {/* <TeamUbah data={editData} style={viewMode} handleChangeFormData={handleChangeFormData} /> */}
            </div>
            <div className="flex">
                <table className="w-full mt-4">
                    <tr>
                        <th>Nama</th>
                        <th>Role</th>
                        <th>Instagram</th>
                        <th>Linkedin</th>
                        <th>Foto</th>
                        <th>Aksi</th>
                    </tr>
                    {
                        loading
                        ?
                        <TableLoader/>
                        :
                        // <div>data</div>
                        
                        data?.mini_project_data_team.map((team)=>(
                            <>
                                <tr key={team.id}>
                                    <td>{team.nama}</td>
                                    <td>{team.role}</td>
                                    <td>{team.instagram}</td>
                                    <td>{team.linkedin}</td>
                                    <td><img src={require(`../AboutUs/img/${team.file_path}`)} alt="gambar" className="w-16"/></td>
                                    <td>
                                        <button className="py-2 w-24 mx-4 bg-red-600 text-white rounded-lg" onClick={()=>hapusTeam(team.id)}><FontAwesomeIcon icon={faTrash} /> Hapus</button>
                                        <button className="py-2 w-24 mx-4 bg-green-600 text-white rounded-lg" onClick={()=> handleEdit(team)}> <FontAwesomeIcon icon={faPenToSquare} />Edit</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </table>
                
            </div>
        </>
    );
}

export default Team;