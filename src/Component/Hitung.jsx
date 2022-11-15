import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCalculator, faRotateRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
// import { setNamaItem, setJumlahItem, setHargaItem, setListData } from "../features/hitungSlice";
// import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const Hitung = ({
    itemsList,
    handleItemChange,
    handleItemAdd,
    handleItemRemove,
    deleteFillItems
}) => {

    const [jumlahMember, setJumlahMember] = useState(0);
    const [jumlahPatungan, setJumlahPatungan] = useState(0);

    const handleViewTotalPatungan = () => {
        let totalHargaBarang = 0;
        itemsList.map((item)=>(
            totalHargaBarang += +item.jumlahItem * +item.hargaItem 
        ))
        setJumlahPatungan(totalHargaBarang/jumlahMember);

        if(jumlahPatungan !== 0 && jumlahMember !== 0){
            toast.success('Perhitungan Patungan Berhasil !');
        } else {
            toast.error('Perhitungan Gagal !');
            // setJumlahPatungan(0);
            // console.log()
        }
        // console.log(jumlahPatungan)
    }

    const handleJumlahMemberChange = (ev) => {
        setJumlahMember(ev.target.value);
        // console.log(jumlahMember);
    }

    const fillNull = () => {
        setJumlahMember(0);
        setJumlahPatungan(0)
    }

    return(
        <>
            <div className="mb-20 max-[768px]:mb-12">
                <div className="container mx-auto">
                    {/* <hr className="mb-16"/> */}
                    <div className="flex max-[768px]:flex-col max-[768px]:text-center max-[768px]:px-0">
                        <div className="w-3/4 mr-12 max-[768px]:mr-2 max-[768px]:w-full">
                            <div className="flex justify-between items-center mb-12">
                                <h1 className="font-bold text-primary text-3xl max-[768px]:px-12">Coba Hitung Patunganmu !</h1>                                
                            </div>
                            {/* Header Judul */}
                            <div className="flex flex-row text-center mt-6 font-bold text-xl text-primary mb-4 mr-12 max-[768px]:hidden">
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
                                        <div className="flex max-[768px]:justify-center" key={index}>
                                            <div className="first-division text-center max-[768px]:mb-8">
                                                <div className="flex max-[768px]:flex-col">
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
                                                            value={singleItems.hargaItem} 
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
                                                    {
                                                        itemsList.length === 1 && (
                                                            <button 
                                                                type="button"
                                                                onClick={(e) => deleteFillItems(e, index)}
                                                                className="">
                                                                <FontAwesomeIcon icon={faRotateRight} className="text-slate-600 text-2xl"/>
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                                {
                                                    itemsList.length - 1 === index && itemsList.length < 10 && (
                                                        <button className="mr-8 py-2 px-8 mt-4 bg-primary text-white text-lg font-bold rounded-xl max-[768px]:mr-0" type="button"
                                                            onClick={handleItemAdd}><FontAwesomeIcon icon={faPlus} className="mr-4" />Tambah Item</button>
                                                    )
                                                }
                                            </div>       
                                        </div>
                                    ))
                                }
                            </form>
                        </div>
                        <div className="w-1/4 flex flex-col items-center border-l-4 max-[768px]:w-full max-[768px]:border-t-4 max-[768px]:border-l-0">
                            <h4 className="text-primary font-bold text-2xl max-[768px]:px-12 max-[768px]:w-full max-[768px]:py-8">Jumlah Anggota Patungan</h4>
                            <div className="my-auto">
                            <input 
                                type="text" 
                                className=" my-8 border-4 border-primary rounded-xl py-24 w-48 text-center text-5xl text-primary font-bold" 
                                name="jumlahMember"
                                // defaultValue={jumlahMember}
                                value={jumlahMember}
                                autoComplete="off"
                                onChange={(evt)=>handleJumlahMemberChange(evt)} />
                            </div>
                            {
                                jumlahMember !== 0 && (
                                    <FontAwesomeIcon icon={faClose} onClick={()=>fillNull()} className="text-slate-600 text-2xl"/>
                                )
                            }
                        </div>
                    </div>
                    <Toaster
                        position="top-center"
                        reverseOrder={true}
                    />
                    <hr className="border-b-4 mb-8 mt-8"/>
                    {/* Hasil nya nanti */}
                    <div className="my-8 flex justify-start items-center max-[768px]:flex-col">
                        <button className="text-xl py-4 rounded-lg bg-primary text-white w-1/4 max-[768px]:w-3/4 max-[768px]:mb-8 max-[768px]:px-2 max-[768px]:text-lg" onClick={handleViewTotalPatungan}><FontAwesomeIcon icon={faCalculator} className="mr-4" /> Hitung Patungan Per Orang </button>
                        <p className="text-4xl font-bold mx-12 text-primary"> : Rp. {jumlahPatungan},00 / Orang</p>
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