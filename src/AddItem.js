import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddItem = (props) => {
    return(
        <div className="additem-wrapper">
           <h5>Add item</h5>
            <Form
                className="form"
                onSubmit={props.ItemSubmitHandler}
            >
                <FormGroup>
                    <Input
                        type="text"
                        onChange={props.handleItemInput}
                        value={props.toBeAddItem}
                        placeholder="Enter Task"
                    />
                </FormGroup>
                <Button className="subNew" disabled={!props.toBeAddItem} type="submit" name="submit" value="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AddItem;