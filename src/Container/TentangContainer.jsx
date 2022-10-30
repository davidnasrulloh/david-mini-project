import React from "react";
import mockup1 from "./img/mockup1.png";
import gambar1 from "./img/gambar1.png";
import gambar2 from "./img/gambar2.png";
import gambar3 from "./img/gambar3.png";
import phone from "./img/phone.png";
import person1 from "./img/person1.png";
import person2 from "./img/person2.png";
import logoback from "./img/logoback.png";

import "./TentangContainer.css";

const CardFeedback = ({comment, nama, status, umur, background}) => (
    <div className="mt-12">
        <div className="p-6 mx-12" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className="h-44">
                <div className="h-3/4">
                    <p className="w-3/4 text-white mb-12">"<span>{comment}</span> "</p>
                </div>
                <div className="text-white self-end text-end">
                    <h4 className="font-bold">{nama}</h4>
                    <p>{status} | {umur} Tahun</p>
                </div>
            </div>
        </div>
    </div>
)    

const CardWhyTrust = ({gambar, judul, text}) => (
    <div className="m-12">
        <img src={gambar} alt="Gambar 1" className="h-60 mx-auto mb-8" />
        <h3 className="text-primary font-bold text-xl mb-2">{judul}</h3>
        <p className="text-primary text-lg mb-2 text-justify">{text}</p>
    </div>
)


const TentangContainer = () => {
    return(
        <div id="tentangProgram">
            <div className="pb-12">
                {/* Tentang Kami */}
                <div className="bg-primary py-6">
                    <div className="container mx-auto">
                        <div className="flex flex-row">
                            <div className="flex-1 gambar-wrapper">
                                <img src={mockup1} className="w-3/4" alt="Mockup 1" />
                            </div>
                            <div className="flex-1 my-auto">
                                <h2 className="text-white font-bold text-4xl mb-3">Tentang Kami</h2>
                                <p className="text-white text-xl">Mau patungan apapun dengan  teman jadi lebih mudah dengan hanya menggunakan aplikasi Patungin. Kamu juga bisa melakukan patungan dengan patungin mulai dari patungan PLN, patungan PDAM, patungan Internet, hingga akun premium dari netflix, spotify dan masih banyak lagi. </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why trust  */}
                <div className="bg-white py-12">
                    <div className="container mx-auto">
                        <div className="text-center">
                            <h1 className="text-primary font-bold text-3xl">Mulai Patungan dengan Mudah, Cepat & Nyaman</h1>
                        </div>
                        <div className="py-8 flex">
                            <CardWhyTrust gambar={gambar1}
                                            judul="Patungan Cepat"
                                            text="Tak perlu ribet lagi hitung manual bayar patunganmu! Cukup scan billnya dengan OCR dan dapatkan pembagian bayarannya dengan mudah dan cepat."/>
                            <CardWhyTrust gambar={gambar2}
                                            judul="Tercatat Dengan Baik"
                                            text="Lupa bayar apa aja kemarin? Sekarang, bisa gak perlu khawatir karena Patungin bisa catat pengeluaran patunganmu dengan rapi"/>
                            <CardWhyTrust gambar={gambar3}
                                            judul="Pembayaran Mudah"
                                            text="Hanya dengan satu klik, bayar patunganmu jadi lebih mudah dengan opsi pembayaran E-wallet yang beragam, dan langsung tercatat."/>
                        </div>
                    </div>
                </div>

                {/* Fitur di patungin */}
                <div className="bg-primary py-12" style={{ backgroundImage: `url(${logoback})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="container mx-auto justify-content-center">
                        <h1 className="text-white font-bold text-3xl text-center">Mulai Patungan dengan Mudah, Cepat & Nyaman</h1>
                        <div className="flex py-12 mt-4 content-why-trust">
                            <div className="flex-1">
                                <div className="h-60">
                                    <h3 className="text-secondary text-2xl font-semibold">Keep track of payment</h3>
                                    <div className="flex mt-4">
                                        <span className="w-24 h-12 bulat rounded-full my-auto"></span>
                                        <p className="text-white text-lg ml-8">Gak perlu hitung manual lagi, scan bill dengan OCR dan dapatkan pembagian split bill dengan mudah!</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-secondary text-2xl font-semibold">Scan Bill Receipt</h3>
                                    <div className="flex mt-4">
                                        <span className="w-24 h-12 bulat rounded-full my-auto"></span>
                                        <p className="text-white text-lg ml-8">Gak perlu hitung manual lagi, scan bill dengan OCR dan dapatkan pembagian split bill dengan mudah!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img src={phone} alt="phone" className="h-128 mx-auto" />
                            </div>
                            <div className="flex-1 text-right">
                                <div className=" h-60">
                                    <h3 className="text-secondary text-2xl font-semibold">Bisa buat circle chat juga loh!</h3>
                                    <div className="flex mt-4">                                    
                                        <p className="text-white text-lg mr-8">Bisa mudahin kamu nih yang orangnya suka nongkrong, tinggal buat aja grup chat atau circle buat patungan nanti kalo lagi nongkrong</p>
                                        <span className="w-28 h-12 bulat rounded-full my-auto"></span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-secondary text-2xl font-semibold">Berbagai Macam Split Bill</h3>
                                    <div className="flex mt-4 mx-auto">
                                        <p className="text-white text-lg mr-8">Hanya dengan satu sentuhan kamu bisa merasakan berbagai manacam split bill seperti PLN, Internet, PDAM, dan masih banyak lagi</p>
                                        <span className="w-28 h-12 bulat rounded-full my-auto"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What he say ? */}
                <div className="container mx-auto mt-32">
                    <div className="flex flex-col">
                        <h1 className="text-primary font-bold text-3xl text-center mb-12">Apa Kata Mereka?</h1>
                        <div className="flex">
                            <div className="flex-1">
                                <CardFeedback 
                                    background={person1}
                                    comment="Patungin ngebantu circle aku buat engga berantem lagi sehabis makan bareng di restoran wkwk, karena proses  splitbill yang no ribet-ribet ngitung manual!"
                                    nama="Citra Dewi Bidari"
                                    status="Mahasiswi"
                                    umur={20}/>
                            </div>
                            <div className="flex-1">
                                <CardFeedback 
                                        background={person2}
                                        comment="Dengan patungin memudahkan banget buat anak kos, terima kasih patungin. Bismillah Dirtek"
                                        nama="Marta Sinta"
                                        status="Mahasiswi"
                                        umur={19}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TentangContainer;