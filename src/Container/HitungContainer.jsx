import React from "react";
import { useState } from "react";
import Hitung from "../component/Hitung";

const HitungContainer = () => {

    const [itemsList, setItemsList] = useState([{
        namaItem: "", 
        jumlahItem: 0, 
        hargaItem: 0
    }]);

    const handleItemChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...itemsList];
        list[index][name] = value;
        setItemsList(list);
        // console.log(list);
    }

    const handleItemRemove = (index) => {
        const list = [...itemsList];
        list.splice(index, 1);
        setItemsList(list);
        console.log(index);
    }

    const handleItemAdd = () => {
        setItemsList([...itemsList, {
            namaItem: "", 
            jumlahItem: 0, 
            hargaItem: 0
        }])
    }

    return(
        <>
            <Hitung 
                itemsList={itemsList} 
                handleItemChange={handleItemChange}
                handleItemRemove={handleItemRemove}
                handleItemAdd={handleItemAdd}/>
        </>
    );
}

export default HitungContainer;