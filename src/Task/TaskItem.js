import React from 'react';
import TaskName from '../TaskName';
import Buttons  from '../Buttons';

const TaskItem = (props) => {
    return(
        <li>
            <TaskName
                isEditing={props.isEditing}
                item={props.item}
                taskMarkComplete={props.taskMarkComplete}
                taskToggleIsEditingAt={props.taskToggleIsEditingAt}
                taskHandleNameEdits={e => props.taskSetName(e.target.value)}
                completed={props.completed}
            />
            <Buttons
                isEditing={props.isEditing}
                taskHandleRemove={props.taskHandleRemove}
                taskMarkComplete={props.taskMarkComplete}
                taskToggleIsEditingAt={props.taskToggleIsEditingAt}
                completed={props.completed}
            />
        </li>
    )
};

export default TaskItem;