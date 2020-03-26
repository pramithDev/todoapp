import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return(
        <div className="itemList-wrapper">
            <h5>Items List</h5>
            <div className="itemList not">
                {props.itemList.map((item,index) =>(
                    item.completed === false &&
                    <Item
                        key={index}
                        item={item.name}
                        isEditing={item.isEditing}
                        handleRemove={() => props.removeItemAt(item.id)}
                        markComplete={() => props.markComplete(item.id)}
                        toggleIsEditingAt={() => props.toggleIsEditingAt(item.id)}
                        setName={text => props.setNameAt(text, item.id)}
                        completed={item.completed}
                    />
                ))}
            </div>
        </div>
    )
}

export default ItemList;