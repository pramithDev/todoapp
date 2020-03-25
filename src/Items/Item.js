import React from 'react';
import ItemName from '../ItemName';
import Buttons  from '../Buttons';

const Item = (props) => {
    return(
        <li>
            <ItemName
                isEditing={props.isEditing}
                item={props.item}
                toggleIsEditingAt={props.toggleIsEditingAt}
                handleNameEdits={e => props.setName(e.target.value)}
            />
            <Buttons
                isEditing={props.isEditing}
                handleRemove={props.handleRemove}
                toggleIsEditingAt={props.toggleIsEditingAt}
            />
        </li>
    )
};

export default Item;