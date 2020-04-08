import React from 'react';
import TaskItem from './TaskItem';

const TaskItemList = (props) => {
    // console.log(props.taskItemList);
    return(
        <div className="itemList-wrapper">
            <h5>Items List</h5>
            <div className="itemList not notDiv">
                {props.taskItemList.map((item, index) => (
                    item.completed === false &&
                    <TaskItem
                        key={index}
                        item={item.name}
                        isEditing={item.isEditing}
                        taskHandleRemove={() => props.taskRemoveItemAt(item.id)}
                        taskMarkComplete={() => props.taskMarkComplete(item.id)}
                        taskToggleIsEditingAt={() => props.taskToggleIsEditingAt(item.id)}
                        taskSetName={text => props.taskSetNameAt(text, item.id)}
                        completed={item.completed}
                    />
                ))}
            </div>
        </div>
    )
}

export default TaskItemList;