import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';

const List = ({ item, index }) => {

    const { handleButtonDelete, handleEdit, handleDone } = useContext(MyContext)

    return (
        <div className="flex gap-8 mt-8 text-primary">
            <p className="border-2 bg-neutral w-96 text-center text-2xl rounded">{item}</p>
            <button onClick={() => handleEdit(index)} className="bg-neutral rounded w-12 h-12 text-xl">Edit</button>
            <button onClick={() => handleButtonDelete(index)} className="bg-neutral rounded w-12 h-12 text-3xl">-</button>
            <input onChange={() => handleDone(index)} type="checkbox" className="checkbox checkbox-accent h-12 w-12 rounded" />
        </div>
    );
};

export default List;