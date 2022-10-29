import React, { useEffect, useState } from "react";
import "./TeamContainer.css";
import { useQuery, useMutation } from "@apollo/client";
import { GetAllDataTeam, DeleteTeam, InsertTeam } from "../../graphQL";
import Team from "./Team";
import { setCards } from "../../features/teamSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const TeamContainer = () => {

    const {data, loading, error} = useQuery(GetAllDataTeam);
    const cards = useSelector((state) => state.team.cards);
    const dispatch = useDispatch();
    const [insertTeam, {loading: loadingInsert}] = useMutation(InsertTeam);
    const [deleteTeam] = useMutation(DeleteTeam, {
        refetchQueries: [GetAllDataTeam],
    });

    const [formData, setFormData] = useState({
        nama: '',
        role: '',
        instagram: '',
        linkedin: ''
    })

    const [image, setImage] = useState('');
    const [files, setFiles] = useState([]);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    const handleChangeFormData = (label, newValue) => {
        setFormData({
            ...formData,
            [label]: newValue
        })
        // console.log(newValue);
    }

    
    const getAllCard = async () => {
        const response = await data;
        return response;
    }

    useEffect(()=>{
        getAllCard()
            .then((res) => {
                // setCards(res);
                dispatch(setCards(res));
                // console.log(res);
                // console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[data])

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // const dataTeamLocation = cards.findIndex((team) => team.id === +formData.id);
        // alert(formData.nama, formData.role);
        // console.log(formData.nama);
        // console.log(formData.role);
        // console.log('image: ', image);
        
        await insertTeam({
            variables: {
                objects: {
                    nama: formData.nama,
                    role: formData.role,
                    instagram: formData.instagram,
                    linkedin: formData.linkedin,
                    file_path: image.name
                }
            }
        })

        let formDataKu = new FormData();
        formDataKu.append(
            "newFile",
            image
        )

        axios.post('http://localhost:3000/upload', formDataKu,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                // image.isUploading = false;
                setFiles([...files, formDataKu])
            })
            .catch((err) => {
                // inform the user
                console.error(err);
                removeFile(image.name);
        });

        
        window.location.reload();
        // .then((res) => {
        //     setArticles(prevState => [...prevState, res.data.insert__onetomany_article.returning[0]])
        // })

    }


    const hapusTeam = (idx) => {
        const ask = window.confirm('Delete the item?');

        if (ask === true){
            deleteTeam(
                {
                    variables: {id: idx},
                }
            );
        }
        // console.log(idx);
        // window.location.reload();
    }
    // console.log(res);
    return(
        <>
            <Team 
                data={cards} 
                formData={formData}
                loading={loading}
                setImage={setImage}
                hapusTeam={hapusTeam}
                handleSubmit={handleSubmit}
                handleChangeFormData={handleChangeFormData}/>
        </>
    )
}

export default TeamContainer;