import React, { createContext, useState } from 'react';
export const MyContext = createContext();
const Provider = ({ children }) => {
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState([]);
    const [editedIndex, setEditedIndex] = useState(-1);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleButtonClick = () => {

        if (editedIndex === -1) {

            setListItems([...listItems, inputValue]);
        } else {
            const updatedItems = [...listItems];
            updatedItems[editedIndex] = inputValue;
            setListItems(updatedItems);
            setEditedIndex(-1);
        }
        setInputValue("");

    };
    const handleEdit = (index) => {
        const listItem = listItems[index];
        setInputValue(listItem);
        setEditedIndex(index);
    }
    const handleButtonDelete = (indexToDelete) => {
        const filteredList = listItems.filter((_item, index) => index !== indexToDelete);
        console.log(filteredList)
        setListItems(filteredList);
    }
    const handleDone = (indexToDone) => {
        const filteredList = listItems.filter((_item, index) => index !== indexToDone);
        console.log(filteredList)
        setListItems(filteredList);

    };
    const authInfo = {
        handleInputChange,
        handleButtonClick,
        handleEdit,
        handleButtonDelete,
        handleDone,
        listItems,
        inputValue
    }
    return (
        <div>
            <MyContext.Provider value={authInfo}>
                {children}
            </MyContext.Provider>
        </div>
    );
};

export default Provider;