
export const TravelItem = ({ item, editingItem, deleteItem, checkItem, uncheckItem }) => {

    return (
        <li className='item'>
            {item.done === !true 
                ? <img onClick={ checkItem } src={ `./images/undone.png` } className='put-check' alt='Empty checkbox' />
                : <img onClick={ uncheckItem } src={ `./images/done.png` } className='del-check' alt='Checked checkbox' />
            }
            { item.travelItem }
            <div>
                <img className='edit-btn' onClick={ editingItem } src={`./images/edit2.png`} alt='Edit button' />
                <img className='del-btn' onClick={ deleteItem } src={`./images/bin2.png`} alt='Delete button'/>
            </div>
        </li>
    );
}