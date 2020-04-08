import React from 'react';


const TaskName = (props) => {
    return (
        <span className="inputSpan">
            {props.isEditing
                ?
                <input
                    type="text"
                    className="taskInput"
                    value={props.item}
                    onChange={props.taskHandleNameEdits}
                />
                :
                <p style={{'textDecoration': props.completed  ? 'line-through' : '' }}>{props.item}</p>
            }
        </span>
    )
};

export default TaskName;