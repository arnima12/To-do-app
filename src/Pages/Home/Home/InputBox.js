import { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';
import List from '../List/List';

const InputBox = () => {
    const { inputValue, handleInputChange, handleButtonClick, listItems } = useContext(MyContext);

    return (
        <div>
            <div className="flex justify-center mt-8 gap-4">
                <input type="text" placeholder="Type here" value={inputValue} onChange={handleInputChange} className="input input-bordered w-full max-w-xs text-info" />
                <button onClick={handleButtonClick} className="bg-neutral text-3xl w-12 rounded text-white">+</button>
            </div>
            <div className="flex justify-center flex-row">
                <ul>
                    {listItems.map((item, index) => (
                        <List key={index} item={item} index={index}></List>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InputBox;