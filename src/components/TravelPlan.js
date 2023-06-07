import { useEffect, useState } from 'react';
import { TravelItem } from './TravelItem';
import { getAllItems, postItem, checkItem, editItem, deleteItem, uncheckItem } from './FetchItem';

export const TravelPlan = () => {
    const [allItems, setAllItems] = useState([]);
    const [travelItem, setTravelItem] = useState('');
    const [edit, setEdit] = useState(false);
    const [itemID, setItemID] = useState('');

    useEffect(() => {
        getAllItems(setAllItems);
    }, [])

    const inputChanging = (e) => {
        setTravelItem(e);
    }

    const updateItem = (id, item) => {
        setTravelItem(item);
        setItemID(id);
        setEdit(true);
    }

    const onEnterBtn = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onEnterBtn}>
            <div className='input-container'>
                <input type='text' onChange={(e) => inputChanging(e.target.value)} value={travelItem} placeholder='Enter..'/>
                <button disabled={!travelItem} type='submit' 
                onClick={ edit ? () => editItem( itemID, travelItem, setTravelItem, setAllItems, setEdit ) : () => postItem( travelItem, setTravelItem, setAllItems ) }>
                    <img className='add-btn' src={ edit ? `./images/check.png` : `./images/add.png` } alt='Add button'/>
                </button>
            </div>
            <ul>
                {allItems.map((item, i) => (
                    <TravelItem key={ i } item={ item } 
                    editingItem={ () => updateItem( item._id, item.travelItem ) } 
                    deleteItem={ () => deleteItem( item._id, setAllItems ) } 
                    checkItem={ () => checkItem( item._id, setAllItems ) }
                    uncheckItem={ () => uncheckItem( item._id, setAllItems ) } 
                    />
                ))}
            </ul>
        </form>
    )
}


