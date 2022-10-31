import React from "react";
import "./Hitung.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
// import { setNamaItem, setJumlahItem, setHargaItem, setListData } from "../features/hitungSlice";
import { useDispatch, useSelector } from "react-redux";


const Hitung = ({
    itemsList,
    handleItemChange,
    handleItemAdd,
    handleItemRemove
}) => {

    const [jumlahMember, setJumlahMember] = useState(0);
    const [jumlahPatungan, setJumlahPatungan] = useState(0);
    let totalHargaBarang = 0;

    const handleViewTotalPatungan = () => {
        itemsList.map((item)=>(
            totalHargaBarang += +item.jumlahItem * +item.hargaItem 
        ))
        setJumlahPatungan(totalHargaBarang/jumlahMember);
    }


    const handleJumlahMemberChange = (ev) => {
        setJumlahMember(ev.target.value);
        // console.log(jumlahMember);
    }

    return(
        <>
            <div className="mb-20 max-[620px]:mb-12">
                <div className="container mx-auto">
                    {/* <hr className="mb-16"/> */}
                    <div className="flex max-[620px]:flex-col max-[620px]:text-center max-[620px]:px-0">
                        <div className="w-3/4 mr-12 max-[620px]:mr-2 max-[620px]:w-full">
                            <div className="flex justify-between items-center mb-12">
                                <h1 className="font-bold text-primary text-3xl max-[620px]:px-12">Coba Hitung Patunganmu !</h1>                                
                            </div>
                            {/* Header Judul */}
                            <div className="flex flex-row text-center mt-6 font-bold text-xl text-primary mb-4 mr-12 max-[620px]:hidden">
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
                                        <div className="flex max-[620px]:justify-center" key={index}>
                                            <div className="first-division text-center max-[620px]:mb-8">
                                                <div className="flex max-[620px]:flex-col">
                                                    <div className="flex-1">
                                                        <input 
                                                            type="text" 
                                                            name="namaItem" 
                                                            id="namaItem" 
                                                            className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" 
                                                            placeholder="Masukkan nama item" 
                                                            autoComplete="off"
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
                                                        
                                                        <button className="mr-8 py-2 px-8 mt-4 bg-primary text-white text-lg font-bold rounded-xl max-[620px]:mr-0" type="button"
                                                            onClick={handleItemAdd}><FontAwesomeIcon icon={faPlus} className="mr-4" />Tambah Items</button>
                                                    )
                                                }
                                            </div>       
                                        </div>
                                    ))
                                }
                            </form>
                        </div>
                        <div className="w-1/4 flex flex-col items-center border-l-4 max-[620px]:w-full max-[620px]:border-t-4 max-[620px]:border-l-0">
                            <h4 className="text-primary font-bold text-2xl max-[620px]:px-12 max-[620px]:w-full max-[620px]:py-8">Jumlah Anggota Patungan</h4>
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
                    <hr className="border-b-4 mb-8 mt-8"/>
                    {/* Hasil nya nanti */}
                    <div className="my-8 flex justify-start items-center max-[620px]:flex-col">
                        <button className="text-xl py-4 rounded-lg bg-primary text-white w-1/4 max-[620px]:w-3/4 max-[620px]:mb-8 max-[620px]:px-2 max-[620px]:text-lg" onClick={handleViewTotalPatungan}><FontAwesomeIcon icon={faCalculator} className="mr-4" /> Hitung Patungan Per Orang </button>
                        <p className="text-4xl font-bold mx-12 text-primary"> : {jumlahPatungan} / Orang</p>
                    </div>
                    <hr className="border-t-4 mb-8"/>
                    <div className="flex justify-center">
                        <h2 className="w-2/4 leading-normal text-center text-3xl text-primary font-normal">Pengen nyoba custom patungan atau scan bill mu? Dapetin fiturnya di <span className="font-bold">Patungin</span> aja! </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hitung;