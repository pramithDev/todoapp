import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const TaskAdd = (props) => {
    return(
        <div className="additem-wrapper">
            <h5>Add item</h5>
            <div className="addItem-inside">
            <Form
                className="form"
                onSubmit={props.taskItemSubmitHandler}
            >
                <FormGroup>
                    <Input
                        type="text"
                        onChange={props.taskHandleItemInput}
                        value={props.taskToBeAddItem}
                        placeholder="Enter Task"
                    />
                </FormGroup>
                <Button className="subNew" disabled={!props.taskToBeAddItem} type="submit" name="submit" value="submit">Submit</Button>
            </Form>
            </div>
        </div>
    )
}

export default TaskAdd;