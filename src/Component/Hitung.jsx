import React from "react";
import "./Hitung.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const Hitung = () => {

    const [itemsList, setItemsList] = useState([{
        namaItem: "", 
        jumlahItem: 0, 
        hargaItem: 0
    }]);

    const [jumlahMember, setJumlahMember] = useState(0);

    const handleJumlahMemberChange = (ev) => {
        setJumlahMember(ev.target.value);
        // console.log(jumlahMember);
    }

    const handleItemChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...itemsList];
        list[index][name] = value;
        setItemsList(list);
        console.log(list);
    }

    const handleItemRemove = (index) => {
        const list = [...itemsList];
        list.splice(index, 1);
        setItemsList(list);
        // console.log(list);
    }

    const handleItemAdd = () => {
        setItemsList([...itemsList, {
            namaItem: "", 
            jumlahItem: 0, 
            hargaItem: 0
        }])
    }

    console.log(itemsList[0].hargaItem);
    return(
        <>
            <div className="mb-20">
                <div className="container mx-auto">
                    {/* <hr className="mb-16"/> */}
                    <div className="flex">
                        <div className="w-3/4 mr-12">
                            <div className="flex justify-between items-center mb-12">
                                <h1 className="font-bold text-primary text-3xl">Coba Hitung Patunganmu !</h1>                                
                            </div>
                            {/* Header Judul */}
                            <div className="flex flex-row text-center mt-6 font-bold text-xl text-primary mb-4 mr-12">
                                <div className="flex-1">
                                    Nama Item
                                </div>
                                <div className="flex-1">
                                    Jumlah Item
                                </div>
                                <div className="flex-1">
                                    Harga
                                </div>
                            </div>
                            {/* Input Items */}
                            <form className="" autoComplete="off">
                                {
                                    itemsList.map((singleItems, index) => (
                                        <div className="flex" key={index}>
                                            <div className="first-division text-center">
                                                <div className="flex">
                                                    <div className="flex-1">
                                                        <input 
                                                            type="text" 
                                                            name="namaItem" 
                                                            id="namaItem" 
                                                            className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" 
                                                            placeholder="Masukkan nama item" 
                                                            autoComplete="off" 
                                                            value={singleItems.namaItem}
                                                            onChange={(ev)=>handleItemChange(ev, index)}
                                                            required
                                                            />
                                                    </div>
                                                    <div className="flex-1">
                                                        <input 
                                                            type="number" 
                                                            name="jumlahItem" 
                                                            id="jumlahItem" 
                                                            className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" 
                                                            placeholder="Jumlah item" 
                                                            value={singleItems.jumlahItem}
                                                            onChange={(ev)=>handleItemChange(ev, index)}
                                                            required
                                                            />
                                                    </div>
                                                    <div className="flex-1">
                                                        <input 
                                                            type="number" 
                                                            name="hargaItem" 
                                                            id="hargaItem" 
                                                            className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" 
                                                            placeholder="Harga per item" 
                                                            value={singleItems.hargaItem}
                                                            onChange={(ev)=>handleItemChange(ev, index)}
                                                            required/>
                                                    </div>
                                                    {
                                                        itemsList.length !== 1 && (
                                                            <button 
                                                                type="button"
                                                                onClick={() => handleItemRemove(index)}
                                                                className="">
                                                                <FontAwesomeIcon icon={faTrash} className="text-red-600 text-2xl"/>
                                                                {/* <span>Remove</span> */}
                                                            </button>
                                                            
                                                        )
                                                    }
                                                </div>
                                                {
                                                    itemsList.length - 1 === index && itemsList.length < 10 && (
                                                        
                                                        <button className="mr-8 py-2 px-8 mt-4 bg-primary text-white text-lg font-bold rounded-xl" type="button"
                                                            onClick={handleItemAdd}><FontAwesomeIcon icon={faPlus} className="mr-4" />Tambah Items</button>
                                                    )
                                                }
                                            </div>       
                                        </div>
                                    ))
                                }
                            </form>
                        </div>
                        <div className="w-1/4 flex flex-col items-center border-l-4">
                            <h4 className="text-primary font-bold text-2xl">Jumlah Anggota Patungan</h4>
                            <div className="my-auto">
                            <input 
                                type="text" 
                                className=" my-8 border-4 border-primary rounded-xl py-24 w-48 text-center text-5xl text-primary font-bold" 
                                name="jumlahMember"
                                value={jumlahMember}
                                onChange={(evt)=>handleJumlahMemberChange(evt)} />
                            </div>
                        </div>
                    </div>
                    <hr className="border-2 mb-8 mt-8"/>
                    {/* Hasil nya nanti */}
                    <div className="my-8 flex justify-start items-center">
                        <p className="text-xl px-8 py-4 rounded-lg bg-primary text-white w-1/5">Total Patungan Per Orang </p>
                        <p className="text-2xl font-bold mx-12 text-primary"> : Hasil nya nanti disini</p>
                    </div>
                    <hr className="border-2 mb-8"/>
                    <div className="flex justify-center">
                        <h2 className="w-2/4 leading-normal text-center text-3xl text-primary font-normal">Pengen nyoba custom patungan atau scan bill mu? Dapetin fiturnya di <span className="font-bold">Patungin</span> aja! </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hitung;