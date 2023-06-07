import axios from './axios';

export const getAllItems = ( setAllItems ) => {
    axios.get('/')
    .then(({data}) => {
        setAllItems(data);
    })
}

export const postItem = ( travelItem, setTravelItem, setAllItems ) => {
    axios.post('/post', { travelItem, done: false })
    .then(() => {
        setTravelItem('');
        getAllItems(setAllItems)
    })
}

export const checkItem = ( _id, setAllItems ) => {
    axios.post('/check', { _id, done: true })
    .then(() => {
        getAllItems(setAllItems)
    })
}

export const editItem = ( itemID, travelItem, setTravelItem, setAllItems, setEdit ) => {
    axios.post('/edit', { _id: itemID, travelItem, done: false })
    .then(() => {
        setTravelItem('');
        setEdit(false);
        getAllItems(setAllItems);
    })
}

export const deleteItem = ( _id, setAllItems ) => {
    axios.post('/delete', { _id })
    .then(() => {
        getAllItems(setAllItems);
    })
}

export const uncheckItem = ( _id, setAllItems ) => {
    axios.post('/uncheck', { _id, done: false })
    .then(() => {
        getAllItems(setAllItems)
    })
}
