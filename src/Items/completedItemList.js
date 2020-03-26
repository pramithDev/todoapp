import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return(
        <div className="itemList-wrapper">
            <h5>Completed Items List</h5>
            <div className="itemList">
                {props.itemList.map((item,index) =>(
                    item.completed === true &&
                    <Item
                        key={index}
                        item={item.name}
                        handleRemove={() => props.removeItemAt(item.id)}
                        markComplete={() => props.markComplete(item.id)}
                        completed={item.completed}
                    />
                ))}
            </div>
        </div>
    )
}

export default ItemList;