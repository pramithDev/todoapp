import React from 'react';


const ItemName = (props) => {
    return (
        <span className="inputSpan">
            {props.isEditing
            ?
                <input
                    type="text"
                    className="taskInput"
                    value={props.item}
                    onChange={props.handleNameEdits}
                />
            :
                <p>{props.item}</p>
            }
        </span>
    )
};

export default ItemName;