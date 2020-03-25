import React from 'react';
import ItemName from '../ItemName';
import Buttons  from '../Buttons';

const Item = (props) => {
    return(
        <li>
            <ItemName
                isEditing={props.isEditing}
                item={props.item}
                markComplete={props.markComplete}
                toggleIsEditingAt={props.toggleIsEditingAt}
                handleNameEdits={e => props.setName(e.target.value)}
                completed={props.completed}
            />
            <Buttons
                isEditing={props.isEditing}
                handleRemove={props.handleRemove}
                markComplete={props.markComplete}
                toggleIsEditingAt={props.toggleIsEditingAt}
                completed={props.completed}
            />
        </li>
    )
};

export default Item;