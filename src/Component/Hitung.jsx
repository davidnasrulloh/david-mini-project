import React from "react";
import "./Hitung.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


const InputItems = () => (
    <div className="flex">
        <form className="flex">
            <div className="flex-1">
                <input type="text" className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" value="Hahha" />
            </div>
            <div className="flex-1">
                <input type="text" className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" value="Hahha" />
            </div>
            <div className="flex-1">
                <input type="text" className="w-80 py-6 px-8 m-4 h-8 border-primary border-2 rounded-xl text-primary text-lg" value="Hahha" />
            </div>
        </form>
        <button className="ml-4"><FontAwesomeIcon icon={faTrash} className="text-red-600 text-2xl"/></button>
    </div>
)

const Hitung = () => {
    return(
        <>
            <div className="mb-20">
                <div className="container mx-auto">
                    {/* <hr className="mb-16"/> */}
                    <div className="flex">
                        <div className="w-3/4 mr-12">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-primary text-3xl">Coba Hitung Patunganmu !</h1>
                                <button className="mr-8 py-4 px-8 bg-primary text-white text-lg font-bold rounded-xl"><FontAwesomeIcon icon={faPlus} className="mr-4" />Tambah Items</button>
                            </div>
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
                            <div className="">
                                <InputItems/>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col items-center border-l-4">
                            <h4 className="text-primary font-bold text-2xl">Jumlah Anggota Patungan</h4>
                            <input type="text" className=" my-8 border-4 border-primary rounded-xl py-24 px-16 w-44 text-center text-5xl text-primary font-bold" value={0} />
                        </div>
                    </div>
                    <hr className="border-2 mb-8 mt-8"/>
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